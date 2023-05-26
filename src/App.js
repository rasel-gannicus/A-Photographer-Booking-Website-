import './App.css';
import { RouterProvider } from 'react-router-dom';
import Routes from './Routes/Routes';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <RouterProvider router={Routes}></RouterProvider>
      <ToastContainer /> 
    </div>
  );
}

export default App;
