import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild, FaUser, FaCog } from 'react-icons/fa';

const NavBar = () => {

    let history = useHistory();

    const dev = JSON.parse(localStorage.getItem('dev'));
    const [ showModal, setShowModal ] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('dev');
        history.push('/sign-in')
    }

    return (
        <nav>
            <div className="logo-section">
                <Link to="/" className="logo">DevZone</Link>
            </div> 
            <div className="menu-section">
                <ul>
                    <li><Link className="list-item-group" to="/"><FaHome/><span>Home</span></Link></li>
                    <li><Link className="list-item-group" to="/new-post"><FaPlusSquare/><span>New Post</span></Link></li>
                    <li><Link className="list-item-group" to="/devs"><FaUsers/><span>DevsZoners</span></Link></li>
                    <li><Link className="list-item-group" to="/posts"><FaBook/><span>Posts</span></Link></li>
                    <li><Link className="list-item-group" to="/about"><FaChild/><span>About</span></Link></li>
                </ul>
            </div>
            <div className="account-section">
                <img src={dev.avatar} alt="avatar" onClick={() => setShowModal(!showModal)} width="50" height="50" style={{borderRadius : '50px'}}/>
                {
                    !showModal ? null : 
                    (<div className="user-account">
                    <ul className="user-account-modal">
                        <li><Link to="/my-profile" className="list-item-group"><FaUser/><span>My Profil</span></Link></li>
                        <li><Link to="/update-my-profile" className="list-item-group"><FaCog/><span>Update Profil</span></Link></li>
                        <li><Link to="/my-posts" className="list-item-group"><FaBook/><span>My posts</span></Link></li>
                        <li><Link to="/new-post" className="list-item-group"><FaPlusSquare/><span>Add new post</span></Link></li>
                        <li>
                            <button onClick={handleLogout}> Log out </button>
                        </li>
                    </ul>
                </div>) 
                }
            </div> 
        </nav>
    )
}

export default NavBar
