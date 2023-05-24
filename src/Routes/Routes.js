import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layout/Main/Main';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/' , 
                element : <Home></Home>
            },
            // {
            //     path : '/login',
            //     // element : 
            // }
        ]
    }
])

export default Routes;