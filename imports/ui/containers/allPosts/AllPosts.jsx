import React from 'react';
import { useHistory } from 'react-router-dom';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';
import './AllPosts.css';

const AllPosts = ({posts}) => {
    let history = useHistory();

    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }
    return (
        <div className="posts-list">
             {
                posts.length < 1 ? null : 
                posts.map((post, index) => <div onClick={() => handleViewPost(post._id)} key={index} ><MostViewedPost mostViewedPost={post}/></div>)
            }
        </div>
    )
}

export default AllPosts;
