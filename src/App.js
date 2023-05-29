import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './Utilities/firebase.init';
import { useDispatch, useSelector } from 'react-redux';
import { useGetServiceCartQuery } from './Redux/Features/service/serviceApi';
import { addServiceToCart } from './Redux/Features/service/serviceSlice';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer /> 
    </div>
  );
}

export default App;
