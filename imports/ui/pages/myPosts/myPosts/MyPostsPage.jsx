import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import { PostsCollection } from "../../../../db/posts/collection";
import MyPosts from '../../../containers/myPosts/MyPosts.jsx'
import PostsSideBar from '../../../components/myPostsSideBar/PostsSideBar.jsx';
import './MyPostsPage.css'


let email = "jordytshibss@test.com"


const PostsPage = ({dev, posts}) => {

    const devObj = dev
    
    if(!devObj){
        useHistory().push('/sign-in');
    } 

    return (
        <div className="posts-page-container">
           <div className="posts-list">
              <MyPosts posts={posts} />
           </div>
           <div className="post-sidebar">
               <PostsSideBar />
           </div>
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({email}).fetch()};

})(PostsPage)