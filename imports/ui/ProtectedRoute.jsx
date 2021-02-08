import React from 'react';
import { Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const ProtectedRoute = props => {

    // const dev = JSON.parse(localStorage.getItem('dev'));

    const dev = {
        fullName : 'Jordy Tshibss',
        dateOfBirth : '1 August 1997',
        avatar : 'http://dailynous.com/wp-content/uploads/2017/05/descartes-square.jpg',
        email : 'jordytshibss@test.com',
        myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
        password : '123456'
      }

      console.log(dev);

    const Component = props.component;
    const isAuthenticated = "jordytshibss@test.com";

    return isAuthenticated ? (
        <div> 
            <NavBar dev={dev}/> 
                <Component propsData={props} dev={dev}/> 
            <Footer/> 
        </div>) 
    : 
    <Redirect to={{pathname : "/sign-in"}} /> 
}

export default ProtectedRoute
