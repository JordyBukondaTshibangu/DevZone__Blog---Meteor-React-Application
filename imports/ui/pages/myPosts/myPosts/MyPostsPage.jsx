import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import { PostsCollection } from "../../../../db/posts/collection";
import MyPosts from '../../../containers/myPosts/MyPosts.jsx'
import PostsSideBar from '../../../components/myPostsSideBar/PostsSideBar.jsx';

const PostsPage = ({dev, posts}) => {
    const devObj = dev
    const myPosts = posts.filter(post => post.email == dev.email)
    const [ searchInput, setSearchInput ] = useState()

    if(!devObj) useHistory().push('/');

    const handleSearch = search => {
        setSearchInput(search)
    }
    
    return (
        <div className="posts-page-container">
            <div className="post-sidebar">
               <PostsSideBar handleSearch={(search) => handleSearch(search)} />
           </div>
           <div className="posts-list">
              <MyPosts posts={myPosts} searchInput={searchInput}/>
           </div>
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find().fetch()};

})(PostsPage)