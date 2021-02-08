import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import SinglePost from '../../components/SinglePost';
import {PostsCollection} from "../../../db/posts/collection";

let email = "jordytshibss@test.com"


const PostsPage = props => {

    const dev = props.dev
    
    if(!dev){
        useHistory().push('/sign-in');
    } 

    return (
        <div className="posts-page-container"> 
            {props.posts.map((post,index) => <SinglePost post={post} key={index}/>)}
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({email}).fetch()};

})(PostsPage)