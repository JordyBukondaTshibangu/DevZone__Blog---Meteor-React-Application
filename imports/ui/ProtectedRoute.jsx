import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import SideBarMenu from './components/SideBarMenu';

const ProtectedRoute = props => {

    const [ openMenu, setOpenMenu ] = useState(false);

    const openSideMenu = () => {
        setOpenMenu(!openMenu)
    }
    const closeSideMenu = () => {
        setOpenMenu(false)
    }
    // const dev = JSON.parse(localStorage.getItem('dev'));

    const dev = {
        fullName : 'Jordy Tshibss',
        dateOfBirth : '1 August 1997',
        avatar : 'http://dailynous.com/wp-content/uploads/2017/05/descartes-square.jpg',
        email : 'jordytshibss@test.com',
        myBio : 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual',
        password : '123456'
      }

    const Component = props.component;
    const isAuthenticated = "jordytshibss@test.com";

    return isAuthenticated ? (
        <div> 
            <NavBar dev={dev} openSideMenu={openSideMenu}/> 
                {
                    openMenu ? ReactDOM.createPortal(<SideBarMenu closeSideMenu={closeSideMenu}/>, document.getElementById('react-portal')) : null
                }
                <Component propsData={props} dev={dev}/> 
            <Footer/> 
        </div>) 
    : 
    <Redirect to={{pathname : "/sign-in"}} /> 
}

export default ProtectedRoute
