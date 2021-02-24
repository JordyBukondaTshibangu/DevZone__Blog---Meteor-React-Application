import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PostsSideBar.css';

const PostsSideBar = () => {
    return (
        <div className="post-side-bar-content">
            <div className="side-search-bar">
                <input type="text" placeholder="Search Post"/>
                <div className="side-fa-icon-search">
                    <FaSearch />
                </div>
            </div>
            <ul>
                <li>View all stories <Link to="/posts" style={{textDecoration : 'none'}}>&rarr;</Link></li>
                <li>Create a new story<Link to="/new-post" style={{textDecoration : 'none'}}>&rarr;</Link></li>
                <li>View my profile<Link to="/my-profile" style={{textDecoration : 'none'}}>&rarr;</Link></li>
                <li>Update my profile<Link to="/update-my-profile" style={{textDecoration : 'none'}}>&rarr;</Link></li>
            </ul>
        </div>
    )
}

export default PostsSideBar
