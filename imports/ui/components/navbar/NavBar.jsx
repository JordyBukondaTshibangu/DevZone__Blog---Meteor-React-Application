import React, { useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild, FaUser, FaCog } from 'react-icons/fa';
import './NavBar.css';
import { UserContext } from '../../context/UserContext';

const NavBar = props => {

    const { handleLogout, userState } = useContext(UserContext)

    const dev = props.dev ;
    const [ showModal, setShowModal ] = useState(false);

    const avatarAlt = "https://www.pngitem.com/pimgs/m/24-248235_user-profile-avatar-login-account-fa-user-circle.png";
    

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
            <div className="hamburger-icon-section"> 
                   <button onClick={props.openSideMenu} >
                   <img src="data:image/png;base64,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" alt="..." className="toggleIcon"/>
                   </button>
            </div>
            <div className="account-section">
                {
                    dev.avatar  ? 

                    <img src={dev.avatar} alt={avatarAlt} onClick={() => setShowModal(!showModal)} width="50" height="50" style={{borderRadius : '50px', pointer : 'cursor'}}/>
                    :
                    <img src={avatarAlt} alt="" onClick={() => setShowModal(!showModal)} width="50" height="50" style={{borderRadius : '50px', pointer : 'cursor'}} />
                }
                
                {
                    !showModal ? null : 
                    ReactDOM.createPortal(
                        <div className="overlay" onClick={() => setShowModal(false)}>
                            <div className="side-bar-menu">
                                <ul className="user-account-modal">
                                    <li><Link to="/my-profile" className="list-item-group"><FaUser/><span>My Profil</span></Link></li>
                                    <li><Link to="/update-my-profile" className="list-item-group"><FaCog/><span>Update Profil</span></Link></li>
                                    <li><Link to="/my-posts" className="list-item-group"><FaBook/><span>My posts</span></Link></li>
                                    <li><Link to="/new-post" className="list-item-group"><FaPlusSquare/><span>Add new post</span></Link></li>
                                    <li>
                                        <a href="/">
                                            <button onClick={handleLogout}> Log out </button>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>, document.getElementById('react-portal-account'))
                }
            </div> 
        </nav>
    )
}

export default NavBar;