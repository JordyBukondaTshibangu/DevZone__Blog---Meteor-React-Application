import React, {useState, useContext} from 'react';
import ReactDOM from 'react-dom';
import {Link, useHistory} from 'react-router-dom';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import Error from '../../feedback/Error';
import Success from '../../feedback/Success';
import { UserContext } from '../../context/UserContext';

const SignUp = () => {

    let history = useHistory();

    const {handleRegister, errorFlag} = useContext(UserContext)

    const [fullName, setFUllName] = useState("");
    const [dateState, setDateState] = useState(new Date());
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showCalendar, setShowCalendar] = useState(false)
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSignUp = evt => {

        evt.preventDefault();

        if (password !== confirmPassword) {
            setError(true);
            setMessage("Password don't match")
            setTimeout(() => {
                history.push('/');
            }, 3000)
            return;
        }
        handleRegister(fullName, dateOfBirth = moment(dateState).format('MMMM Do YYYY'), email, password)
        setError(errorFlag)
        setSuccess(errorFlag)
    }

    return (<div className="login-container"> {
        error && ReactDOM.createPortal (<Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback'))
    }
        {
        message && ReactDOM.createPortal (<Error> {message}</Error>, document.getElementById('react-feedback'))
    }
        {
        success && ReactDOM.createPortal (<Success>Welcome to DevZone, Your account was successfully created!</Success>, document.getElementById('react-feedback'))
    }
        <div className="login-box">
            <h3>Sign UP
            </h3>
            <form onSubmit={handleSignUp}>
                <div className="input-group">
                    <input type="text" placeholder="Full Name"
                        value={fullName}
                        onChange={
                            e => setFUllName(e.target.value)
                        }
                        required/>
                </div>
                <div className="input-group">
                    <span className="date-of-birth"
                        onClick={
                            () => setShowCalendar(!showCalendar)
                    }> {
                        showCalendar ? '' : 'Click to enter your birth day'
                    }</span>
                    {
                    showCalendar && <>
                        <span>
                            Date of Birth :
                            <b> {
                                moment(dateState).format('MMMM Do YYYY')
                            }</b>
                        </span>
                        <Calendar value={dateState}
                            onChange={
                                e => setDateState(e)
                            }/>
                    </>
                } </div>
                <div className="input-group">
                    <input type="email" placeholder="email address"
                        value={email}
                        onChange={
                            e => setEmail(e.target.value)
                        }
                        required/>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="password"
                        value={password}
                        onChange={
                            e => setPassword(e.target.value)
                        }
                        required/>
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Confirm password"
                        value={confirmPassword}
                        onChange={
                            e => setConfirmPassword(e.target.value)
                        }
                        required/>
                </div>
                <div className="btn-section login-btn">
                    <button type="submit">Sign Up
                    </button>
                </div>
                <div className="go-to-sign-up">
                    <h6>Already a devzoner,
                        <Link to="/">Sign In</Link>
                    </h6>
                </div>
            </form>
        </div>
    </div>)
}

export default SignUp
