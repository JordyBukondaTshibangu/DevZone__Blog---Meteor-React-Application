import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { PostsCollection } from '../../api/collections/postCollections';
import PostCard from '../components/PostCard';
import ListUsers from '../components/ListUsers';
import UserAccount from '../components/UserAccount';


const HomePage = props => {
    return (
        <div className="main">
            <UserAccount />
            <div className="posts-list">
                
                {
                    props.posts.map((post, index) => {
                    return <PostCard  key={index} post={post} />
                    })
                }
            </div>
            <div className="devs-side-bar">
                <h2>DevZoners </h2>
                <ListUsers />
            </div>
        </div>
    )
}


export default withTracker(() => {

    Meteor.subscribe('posts', 3);

    return { posts : PostsCollection.find({}).fetch()};

})(HomePage);