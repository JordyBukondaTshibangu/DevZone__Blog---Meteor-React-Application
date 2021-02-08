import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
    
    let history = useHistory();

    const [ fullName, setFUllName ] = useState("");
    const [ dateOfBirth, setDateOfBirth ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ message, setMessage ] = useState("");

    const handleSignUp = evt => {

        evt.preventDefault();

        if(password !== confirmPassword){
            setMessage("Please ensure the password match");
            return;
        }
        const newDev = {
            fullName, dateOfBirth, email, password
        }
        Meteor.call('developer.create', newDev, error => {
            if(error) {
                setMessage("There was an error from the server");

                return;
            }
            localStorage.setItem('dev', JSON.stringify(dev))
            history.push('/');

        })
    }

    return (
        <div className="login-container">
            { message }
            <div className="login-box">
                <h3>Sign UP </h3>
                <form onSubmit={handleSignUp}>
                     <div className="input-group">
                        <label> Full Name </label>
                        <input type="text" value={fullName} onChange={e => setFUllName(e.target.value)} required/>
                    </div>
                     <div className="input-group">
                        <label> Date of Birth</label>
                        <input type="text" value={dateOfBirth} onChange={e => setDateOfBirth(e.target.value)} required/>
                    </div>
                     <div className="input-group">
                        <label> Email</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    </div>
                     <div className="input-group">
                        <label> Password</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                    </div>
                     <div className="input-group">
                        <label> Confirm Password</label>
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} required/>
                    </div>
                    <div className="btn-section login-btn">
                        <button type="submit">Sign Up </button>
                    </div>
                    <div className="go-to-sign-up">
                        <h6>Already a devzoner, <Link to="/sign-in">Sign In</Link></h6>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
