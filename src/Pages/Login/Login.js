import React, { useState } from 'react';
import './Login.css';

import googleLogo from '../../assets/img/Icons/google.svg';
import facebookLogo from '../../assets/img/Icons/facebook (1).svg';
import githubLogo from '../../assets/img/Icons/github.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';


const Login = () => {
    const navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    // --- taking user to registration page if user want to sign up
    function navigation() {
        navigate('/signup');
    }


    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');    

     // this function will get email from user and will reserve it to 'email' state
     function handleEmail(e){
        setEmail(e.target.value);
    }

    // this function will get password from user and will reserve it to 'password' state
    function handlePassword(e){
        setPassword(e.target.value);
    }

    // sign up with 'google' 
    const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
    // sign up with 'facebook' 
    const [signInWithFacebook, user3, loading3, error3] = useSignInWithFacebook(auth);
    // sign up with 'github' 
    const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);

    let errorText = document.querySelector('.error-message p');
    let spinnerSignup = document.querySelector('.spinner-signup');

    const [signInWithEmailAndPassword,user, loading,error, ] = useSignInWithEmailAndPassword(auth);

    function handleSubmit(e){
        spinnerSignup.style.display = 'block';
        e.preventDefault();
        
        signInWithEmailAndPassword(email, password);
        if(user || user2 || user3 || user4){
            navigate('/');
            navigate(from, { replace: true });
        }
        errorText.innerText = '';

        return;
    }
    if(user || user2 || user3 || user4){
        navigate('/');
        navigate(from, { replace: true });
    }
    if(error){
        errorText.innerText = `${error.message}`;
        spinnerSignup.style.display = 'none';
    }

    function navigateResetPass(){
        navigate('/resetPass');
    }

    return (
        <div>
            <div className="input-fields mx-auto login-div ">
                <h4>Login</h4>
                <hr width='70%' className='mx-auto' />
                <form action="" onSubmit={handleSubmit}>
                    <div className="input-field ">
                        <input onBlur={handleEmail} type="email" name="Email" id="" required />
                        <span className='input-placeholder'>Your Email </span>
                    </div>
                    <div className="input-field ">
                        <input onBlur={handlePassword} type="password" name="" id="" required />
                        <span className='input-placeholder'>Your password </span>
                    </div>
                    {/* ------------------ Error message will be shown here ----------------- */}
                    <div className="error-message">
                        <span className='spinner-signup'><Spinner animation="border"  variant="primary" /></span>
                        <p></p>
                    </div>
                    <div className="message-button-div login-button-div">
                        <button>Login</button>
                    </div>
                </form>
                
                <span onClick={navigateResetPass} draggable className='forgot-password'><p>Forgot Password ?</p></span>
                <p>Don't have an account ? <span onClick={navigation} draggable className=' red-text'>Register Here</span> </p>
                <div className='or-div'>
                    <hr />
                    <p>Or</p>
                </div>
                <div className="social-login-div">
                    <p>Sign in using</p>
                    <div className="social-login-div-icon">
                        <div onClick={()=>signInWithGoogle()} draggable className="social-login">
                            <img src={googleLogo} alt="" />
                        </div>
                        <div onClick={()=>signInWithFacebook()} draggable className="social-login">
                            <img src={facebookLogo} alt="" />
                        </div>
                        <div onClick={()=>signInWithGithub()} draggable className="social-login">
                            <img src={githubLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;