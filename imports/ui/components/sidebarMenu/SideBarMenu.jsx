import React, { useContext } from 'react';
import { Link  } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild, FaUser, FaCog } from 'react-icons/fa';
import './SideBarMenu.css';
import { UserContext } from '../../context/UserContext';

const SideBarMenu = props => {

    const { handleLogout } = useContext(UserContext)
    return (
        <div className="overlay" onClick={props.closeSideMenu}>
            <div className="side-bar-menu">
                <ul>
                    <li><Link to="/home" className="list-item-group"><FaHome/><span>Home</span></Link></li>
                    <li><Link to="/new-post" className="list-item-group"><FaPlusSquare/><span>New Post</span></Link></li>
                    <li><Link to="/devs" className="list-item-group"><FaUsers/><span>DevsZoners</span></Link></li>
                    <li><Link to="/posts" className="list-item-group"><FaBook/><span>Posts</span></Link></li>
                    <li><Link to="/about" className="list-item-group"><FaChild/><span>About</span></Link></li>
                    <li><Link to="/my-profile" className="list-item-group"><FaUser/><span>My Profil</span></Link></li>
                    <li><Link to="/update-my-profile" className="list-item-group"><FaCog/><span>Update Profil</span></Link></li>
                    <li><Link to="/my-posts" className="list-item-group"><FaBook/><span>My posts</span></Link></li>
                    <li>
                        <a href="/">
                            <button onClick={handleLogout}> Log out </button>
                        </a>
                    </li>
                </ul>
        </div>
        </div>
    )
}

export default SideBarMenu;