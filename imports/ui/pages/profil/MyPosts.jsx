import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import { PostsCollection } from '../../../api/collections/postCollections';
import SinglePost from '../../components/SinglePost';

const dev = JSON.parse(localStorage.getItem('dev'));
let email;
if(dev === null){
    email = ""
} else {
    email = dev.email;
}


const PostsPage = props => {

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