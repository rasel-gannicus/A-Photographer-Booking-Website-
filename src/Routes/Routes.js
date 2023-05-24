import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/' , 
                element : <Home></Home>
            },
            {
                path : '/login',
                element : <Login></Login> 
            }
        ]
    }
])

export default Routes;