import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Pages/Layout/Main/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import About from '../Pages/Home/About/About';
import CheckoutPage from '../Pages/CheckoutPage/CheckoutPage';
import ResetPassword from '../Pages/ResetPassword/ResetPassword';
import Blogs from '../Pages/Blogs/Blogs';
import Wishlist from '../Pages/Wishlist/Wishlist';
import SignUp from '../Pages/SignUp/SignUp';
import BookingCart from '../Pages/BookingCart/BookingCart';
import Shop from '../Pages/Shop/Shop';
import ProductCart from '../Pages/ProductCart/ProductCart';
import Error from '../Pages/Error/Error';
import Profile from '../Pages/Profile/Profile';
import PrivateRoute from '../Utilities/PrivateRoute/PrivateRoute';
import PublicRoute from '../Utilities/PublicRoute/PublicRoute';

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
            },
            {
                path : '/checkout',
                element : <CheckoutPage></CheckoutPage> 
            },
            {
                path : '/resetPass',
                element : <ResetPassword></ResetPassword>
            },
            {
                path : '/blogs',
                element : <Blogs></Blogs>
            },
            {
                path : '/wishlist',
                element : <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path : '/signup',
                element : <SignUp></SignUp>
            },
            {
                path : '/bookingCart',
                element : <BookingCart></BookingCart>
            },
            {
                path : '/shop',
                element : <Shop></Shop>
            },
            {
                path : '/productCart',
                element : <ProductCart></ProductCart>
            },
            {
                path : '/about',
                element : <About></About>
            },
            {
                path : '/profile',
                element : <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path : '*',
                element : <Error></Error>
            }
        ]
    }
])

export default Routes;