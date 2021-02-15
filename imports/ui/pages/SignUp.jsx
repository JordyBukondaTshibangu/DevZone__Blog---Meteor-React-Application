import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Link, useHistory } from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Error from '../feedback/Error';
import Success from '../feedback/Success';

const SignUp = () => {
    
    let history = useHistory();

    const [ fullName, setFUllName ] = useState("");
    const [ dateState, setDateState] = useState(new Date());
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");
    const [ message, setMessage ] = useState("")
    const [ success, setSuccess ] = useState(false);
    const [ error,  setError ] = useState(false);

    const handleSignUp = evt => {

        evt.preventDefault();

        if(password !== confirmPassword){
            setError(true);
            setMessage("Password don't match")
            setTimeout(()=> {
                history.push('/sign-in');
            },3000)
            return;
        }
        const newDev = {
            fullName, 
            dateOfBirth : moment(dateState).format('MMMM Do YYYY'), 
            email, 
            password
        }
        Meteor.call('developer.create', newDev, error => {
            if(error) {
                setError(true);
                setTimeout(()=> {
                    history.push('/sign-in');
                },3000)
                return;
            }
            setSuccess(true);
            Meteor.call('sendEmail', email, error => {
                localStorage.setItem('dev', JSON.stringify(newDev))
                history.push('/');

                if(error) {
                    console.log("Error happened");
                    return;
                }
            });
        })
    }

    return (
        <div className="login-container">
            { error && ReactDOM.createPortal( <Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback')) }
            { message && ReactDOM.createPortal( <Error>{message}</Error>, document.getElementById('react-feedback')) }
            { success && ReactDOM.createPortal( <Success>Welcome to DevZone, Your account was successfully created!</Success>, document.getElementById('react-feedback')) }
            <div className="login-box">
                <h3>Sign UP </h3>
                <form onSubmit={handleSignUp}>
                     <div className="input-group">
                        <label> Full Name </label>
                        <input type="text" value={fullName} onChange={e => setFUllName(e.target.value)} required/>
                    </div>
                     <div className="input-group">
                        <label> Date of Birth : <b>{moment(dateState).format('MMMM Do YYYY')}</b> </label>
                        <Calendar 
                            value={dateState}
                            onChange={e => setDateState(e)}
                        />
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
