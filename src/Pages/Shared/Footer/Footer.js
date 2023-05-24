import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import facebookLogo from '../../../assets/img/Icons/facebook.svg'
import facebookLogo2 from '../../../assets/img/Icons/facebook (1).svg'
import twitter from '../../../assets/img/Icons/twitter (1).svg'
import twitter2 from '../../../assets/img/Icons/twitter (3).svg'
import instagram from '../../../assets/img/Icons/instagram.svg'
import instagram2 from '../../../assets/img/Icons/instagram (1).svg'
import whatsapp from '../../../assets/img/Icons/whatsapp.svg'
import whatsapp2 from '../../../assets/img/Icons/whatsapp (1).svg'
import linkedIn from '../../../assets/img/Icons/likedin.svg'
import linkedIn2 from '../../../assets/img/Icons/likedin (1).svg';
// import linkedIn3 from '../../../assets/img/Icons/';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-upper">
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={facebookLogo} alt="" /></span>
                    <span className='second-logo'><img src={facebookLogo2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={twitter} alt="" /></span>
                    <span className='second-logo'><img src={twitter2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={instagram} alt="" /></span>
                    <span className='second-logo'><img src={instagram2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={whatsapp} alt="" /></span>
                    <span className='second-logo'><img src={whatsapp2} alt="" /></span>
                </div>
                <div className="social-div fb-icon">
                    <span className='first-logo'><img src={linkedIn} alt="" /></span>
                    <span className='second-logo'><img src={linkedIn2} alt="" /></span>
                </div>
            </div>
            <hr />
            {/* Footer bottom here */}
            <div className="footer-bottom">
                <p className='mb-0'>All Right &copy; Reserved By <a href="https://www.linkedin.com/in/shafiq5russell/" target="_blank" rel="noopener noreferrer">Shafiqul Hasan Russell</a>  </p>
            </div>
        </div>
    );
};

export default Footer;