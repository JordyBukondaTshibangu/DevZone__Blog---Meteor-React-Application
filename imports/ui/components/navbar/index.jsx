import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import styled  from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild} from 'react-icons/fa';
import { NavContainer, NavLogo, MobileIcon, NavItemContainer, NavLink,NavItem, NavItems, LoginButton } from './NavbarElement';
import { UserContext } from '../../context/UserContext';

const NavBar = props => {

    const { handleLogout, userState } = useContext(UserContext)

    const dev = props.dev ;
    const [ showModal, setShowModal ] = useState(false);
    

    return (
        <NavContainer>
            <NavLogo to='/home'>
                    DevZone
            </NavLogo>
            <MobileIcon/>
            <NavItemContainer>
                <NavItems>
                    <NavItem>
                        <FaHome />
                        <NavLink to="/home">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaPlusSquare/>
                        <NavLink to="/new-post">Write</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaBook/>
                        <NavLink to="/posts">Stories</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaUsers />
                        <NavLink to="/devs"> DevZoners</NavLink>
                    </NavItem>
                    <NavItem>
                        <FaChild/>
                        <NavLink to="/about-us">About us</NavLink>
                    </NavItem>
                </NavItems>
                <LoginButton to='/'>
                        Sign In
                </LoginButton>
            </NavItemContainer>
        </NavContainer>
    )
}

export default NavBar;