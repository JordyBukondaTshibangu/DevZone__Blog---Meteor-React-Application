import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import PostCard from '../components/PostCard';
import ListUsers from '../components/ListUsers';
import UserAccount from '../components/UserAccount';
import {PostsCollection} from "../../db/posts/collection";
import LoadingSpinner from '../components/LoadingSpinner';


const HomePage = ({posts, dev}) => {

    return (
        <div className="main">
            <UserAccount dev={dev}/>
            <div className="posts-list">
                
                {
                    posts.length === 0 ? <LoadingSpinner /> : 
                    posts.map((post, index) => {
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