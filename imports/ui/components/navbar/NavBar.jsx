import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { NavContainer, NavLogo,NavItems,NavItem, NavLink, MobileIcon} from './NavbarElement'

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
            <NavItems>
                <NavItem>
                    <NavLink to="/home">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/new-post">Write</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/posts">Stories</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/devs"> DevsZoners</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/about-us">About us</NavLink>
                </NavItem>
            </NavItems>
                    {/* <li><Link ><FaHome/><span></span></Link></li>
                    <li><Link ><FaPlusSquare/><span></span></Link></li>
                    <li><Link ><FaUsers/><span></span></Link></li>
                    <li><Link ><FaBook/><span>Posts</span></Link></li>
                    <li><Link to="/about"><FaChild/><span>About</span></Link></li> */}
        </NavContainer>
    )
}

export default NavBar;