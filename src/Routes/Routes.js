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
import ProfileDetails from '../Pages/Profile/ProfileDetails/ProfileDetails';
import EditProfile from '../Pages/Profile/EditProfile/EditProfile';
import Cart from '../Pages/Cart/Cart';
import Bookings from '../Pages/Profile/Bookings/Bookings';
import UserLayout from '../Pages/Layout/User/UserLayout';
import Dashboard from '../Pages/Layout/User/Dashboard/Dashboard';

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
                path : '/profile/',
                element : <PrivateRoute><Profile></Profile></PrivateRoute>,
                children : [
                    {
                        path : '/profile/',
                        element : <ProfileDetails></ProfileDetails>
                    },
                    {
                        path : '/profile/profileDetails',
                        element : <ProfileDetails></ProfileDetails>
                    },
                    {
                        path : '/profile/cart',
                        element : <Cart></Cart>
                    },
                    {
                        path : '/profile/editProfile',
                        element : <EditProfile></EditProfile>
                    },
                    {
                        path : '/profile/bookings',
                        element : <Bookings></Bookings>
                    }
                ]
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
                path : '*',
                element : <Error></Error>
            }
        ]
    },
    {
        path : '/user',
        element : <PrivateRoute><UserLayout /></PrivateRoute>,
        children : [
            {
                index : true ,
                element : <Dashboard /> 
            },
            {
                path : '/user/dashboard',
                element : <Dashboard /> 
            },
            {
                path : '/user/cart',
                element : <Cart />
            },
            {
                path : '/user/bookings',
                element : <Bookings />
            },
            {
                path : '/user/editProfile',
                element : <ProfileDetails />
            },
            {
                path : '*',
                element : <Error></Error>
            }

        ]
    }
])

export default Routes;