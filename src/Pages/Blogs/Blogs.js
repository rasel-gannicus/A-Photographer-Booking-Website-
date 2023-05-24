import React from 'react';
import './Blogs.css';
import profileLogo from '../../assets/img/bg-low-size.png';

const Blogs = () => {
    return (
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>What's the difference between authorization and authentication ?</p>
                            </div>
                            <div className="blog-body">
                                <p>Authentication and authorization are two vital information security processes that administrators use to protect systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights. Although the two terms sound alike, they play separate but equally essential roles in securing applications and data. Understanding the difference is crucial. Combined, they determine the security of a system.</p>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>Why we should use firebase ?</p>
                            </div>
                            <div className="blog-body">
                                <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. When the device regains connection, the Realtime Database synchronizes the local data changes with the remote updates that occurred while the client was offline, merging any conflicts automatically.

                                The Realtime Database provides a flexible, expression-based rules language, called Firebase Realtime Database Security Rules, to define how your data should be structured and when data can be read from or written to. When integrated with Firebase Authentication, developers can define who has access to what data, and how they can access it.</p>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="h-100">
                        <div className='blog-div h-100'>
                            <div className="blog-heading">
                                <p>What other services does firebase provide other than authentication ?</p>
                            </div>
                            <div className="blog-body">
                                <p>The Other services firebase provide other than authentication :</p>
                                <ul>
                                    <li>Realtime database</li>
                                    <li>Remote Config</li>
                                    <li>Firebase Extenstions</li>
                                    <li>App Check</li>
                                    <li>Cloud Functions</li>
                                    <li>Cloud Messaging</li>
                                    <li>Cloud Storage</li>
                                    
                                </ul>
                            </div>
                            <div className="blog-footer">
                                <div className="blog-footer-img">
                                    <img src={profileLogo} alt="" />
                                </div>
                                <div className="blog-footer-desc">
                                    <p>Jonathan Wick</p>
                                    <p>Founder, 86 Canvas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;