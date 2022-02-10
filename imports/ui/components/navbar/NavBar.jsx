import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild, FaUser, FaCog } from 'react-icons/fa';
import { UserContext } from '../../context/UserContext';

const NavBar = props => {

    const { handleLogout, userState } = useContext(UserContext)

    const dev = props.dev ;
    const [ showModal, setShowModal ] = useState(false);
    

    return (
        <nav>
            <div className="logo-section">
                <Link to="/home" className="logo">DevZone</Link>
            </div> 
            <div className="menu-section">
                <ul>
                    <li><Link className="list-item-group" to="/home"><FaHome/><span>Home</span></Link></li>
                    <li><Link className="list-item-group" to="/new-post"><FaPlusSquare/><span>New Post</span></Link></li>
                    <li><Link className="list-item-group" to="/devs"><FaUsers/><span>DevsZoners</span></Link></li>
                    <li><Link className="list-item-group" to="/posts"><FaBook/><span>Posts</span></Link></li>
                    <li><Link className="list-item-group" to="/about"><FaChild/><span>About</span></Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;