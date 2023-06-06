import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import CartPopup from './Utilities/CartPopup/CartPopup';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Utilities/firebase.init';
import { useEffect } from 'react';
function App() {
  // --- getting user info from firebase auth
  const [user] = useAuthState(auth);

  // --- verifying with jwt token
  useEffect(() => {
    if (user) {
      const currentUser = {email : user.email};
      fetch('http://localhost:2300/jwt',{
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
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
