import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import CartPopup from './Utilities/CartPopup/CartPopup';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Utilities/firebase.init';
import { useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from './Redux/Features/modal/modalSlice';
import Modals from './Utilities/Modal/Modal';
function App() {
  // --- getting user info from firebase auth
  const [user] = useAuthState(auth);

  const modalStatus = useSelector(state => state.modal.modalShow);
  // console.log(modalStatus);

  const dispatch = useDispatch();

  // --- verifying with jwt token
  useEffect(() => {
    if (user) {
      const currentUser = {email : user.email};
      fetch(`${process.env.REACT_APP_API_URL}/jwt`,{
        method : 'POST',
        headers : {
          'content-type' : 'application/json'
        },
        body : JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('token', data.token)
      })
    }
  }, [user])
  return (
    <div className='App'>
      <RouterProvider router={Routes} ></RouterProvider>
      <ToastContainer />
      {/* <Modal show={modalStatus} onHide={()=>dispatch(hideModal())} /> */}
      <Modals />

      {/* <Modal show={modalStatus} onHide={()=>dispatch(hideModal())} >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={()=>dispatch(hideModal())}>
            Close
          </button>
          <button variant="primary" onClick={()=>dispatch(hideModal())}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
}

export default App;
