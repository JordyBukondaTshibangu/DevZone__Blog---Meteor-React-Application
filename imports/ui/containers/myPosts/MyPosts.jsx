import React from 'react';
import LoadingSpinner from '../../feedback/LoadingSpinner';
import Posts from '../../components/myPosts/Posts.jsx';
import './MyPosts.css';

const MyPosts = ({posts}) => {
    return (
        <div className="list-posts">
            {    
                posts.length === 0 ? <LoadingSpinner/> :  
                posts.map((post,index) => <Posts post={post} key={index}/>)
            }
        </div>
    )
}

export default MyPosts
