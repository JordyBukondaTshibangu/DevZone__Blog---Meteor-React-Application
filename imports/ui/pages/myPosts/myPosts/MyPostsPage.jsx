import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import { PostsCollection } from "../../../../db/posts/collection";
import MyPosts from '../../../containers/myPosts/MyPosts.jsx'
import PostsSideBar from '../../../components/myPostsSideBar/PostsSideBar.jsx';
import './MyPostsPage.css'

const PostsPage = ({dev, posts}) => {

    const devObj = dev

    const myPosts = posts.filter(post => post.email == dev.email)

    if(!devObj) useHistory().push('/sign-in');
    
    return (
        <div className="posts-page-container">
           <div className="posts-list">
              <MyPosts posts={myPosts} />
           </div>
           <div className="post-sidebar">
               <PostsSideBar />
           </div>
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find().fetch()};

})(PostsPage)