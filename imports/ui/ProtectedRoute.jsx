import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const ProtectedRoute = props => {

    const dev = JSON.parse(localStorage.getItem('dev'));
 
    const Component = props.component;
    const isAuthenticated = dev.email;

    return isAuthenticated ? (
        <div> 
            <NavBar/> 
                <Component propsData={props}/> 
            <Footer/> 
        </div>) 
    : 
    <Redirect to={{pathname : "/sign-in"}} /> 
}

export default ProtectedRoute
