import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import CartPopup from './Utilities/CartPopup/CartPopup';
function App() {
  return (
    <div className='App'>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer /> 
    </div>
  );
}

export default App;
