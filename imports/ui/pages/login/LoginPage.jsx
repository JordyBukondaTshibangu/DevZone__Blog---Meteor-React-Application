import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './LoginPage.css';

const LoginPage = () => {

    const { handleLogin } = useContext(UserContext)

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    
    const loginHandler = evt => {
        evt.preventDefault();
        handleLogin(email, password)
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h3>Sign In </h3>
                <form onSubmit={loginHandler}>
                    <div className="input-group">
                        <input type="email" placeholder="Email address" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>
                    <div className="btn-section login-btn">
                        <button>Sign In </button>
                    </div>
                    <div className="go-to-sign-up">
                        <h6>Don't have an account yet, <Link to="/sign-up">Sign Up</Link></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
