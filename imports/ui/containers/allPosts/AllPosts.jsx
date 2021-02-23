import React from 'react';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';
import './AllPosts.css';

const AllPosts = ({posts}) => {
    console.log(posts);
    return (
        <div className="posts-list">
             {
                posts.length < 1 ? null : 
                posts.map((post, index) => <MostViewedPost key={index} mostViewedPost={post} />)
            }
        </div>
    )
}

export default AllPosts
