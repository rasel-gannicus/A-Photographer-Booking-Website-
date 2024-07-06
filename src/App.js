import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Utilities/firebase.init';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modals2 from './Utilities/Modal/Modals2';
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
      <Modals2 />   
      
    </div>
  );
}

export default App;
