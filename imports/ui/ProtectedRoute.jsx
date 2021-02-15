import React from 'react';
import {Redirect} from 'react-router-dom';

const ProtectedRoute = props => {

    const dev = JSON.parse(localStorage.getItem('dev'));


    const Component = props.component;
    const isAuthenticated = dev.email;

    return isAuthenticated ? <Component propsData={props} dev={dev}/> : <Redirect to={{pathname : "/sign-in"}} />
}

export default ProtectedRoute;
