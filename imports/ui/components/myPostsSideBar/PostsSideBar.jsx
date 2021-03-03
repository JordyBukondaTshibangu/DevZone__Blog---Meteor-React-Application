import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './PostsSideBar.css';

const PostsSideBar = ({handleSearch}) => {
    const [ search, setSearch ] = useState("");

    const submitForm = event => {
        event.preventDefault();
        handleSearch(search)
    }
    return (
        <div className="post-side-bar-content">
            <form className="side-search-bar" onSubmit={submitForm}>
                <input type="text" placeholder="Search Post" onChange={event => setSearch(event.target.value)}/>
                <div className="side-fa-icon-search" onClick={() => handleSearch(search)}>
                    <FaSearch />
                </div>
            </form>
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
