import React from 'react';
import LoadingSpinner from '../../feedback/LoadingSpinner';
import Posts from '../../components/myPosts/Posts.jsx';
import './MyPosts.css';

const MyPosts = ({posts, searchInput}) => {

    return (
        <div className="list-posts">
            {    
                posts.length === 0 ? <LoadingSpinner/> :  
                posts
                .filter(post => {
                    if(searchInput === "" || !searchInput)  return post
                    else if(post.title.toLowerCase().includes(searchInput.toLowerCase()))  return post
                })
                .map((post,index) => <Posts post={post} key={index}/>)
            }
        </div>
    )
}

export default MyPosts
