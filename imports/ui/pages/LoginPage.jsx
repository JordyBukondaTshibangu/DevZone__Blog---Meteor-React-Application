import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const LoginPage = () => {

    let history = useHistory()

    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");

    const handleLogin = evt => {

        evt.preventDefault();

        const dev = { email, password }
        Meteor.call('dev.login', dev, (error, dev) => {
            if(error) {
                setError("There was an error ")
                
                return ;
            }

            localStorage.setItem('dev', JSON.stringify(dev))
            history.push('/')
        })
        
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h3>Sign In </h3>
                { error }
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <span> Email</span>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <span> Password</span>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
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
