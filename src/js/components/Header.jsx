import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/index.css';
import Login from './container/Login.jsx';
import Signup from './container/Signup.jsx';

const Header = () => (
    <header className="navigation">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Questioner</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="collapseBar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><Link to='/' className="nav-link"><p className="link-item" data-toggle="modal" data-target="#myModal">Sign In</p></Link></li>
                        <li className="nav-item"><Link to='/' className="nav-link"> <p className="link-item" data-toggle="modal" data-target="#signUpModal">Sign Up</p></Link></li>
                    </ul>
                </div>
            </div>
        </nav>

        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
                <div className="modal-header">
                <h5 className="modal-title">Sign in </h5>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <Login />
                </div>
                
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>

        <div className="modal fade" id="signUpModal">
            <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
            
                <div className="modal-header">
                <h5 className="modal-title">Sign Up</h5>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                <div className="modal-body">
                    <Signup />
                </div>
                
                <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                
            </div>
            </div>
        </div>
    </header>
);

export default Header;