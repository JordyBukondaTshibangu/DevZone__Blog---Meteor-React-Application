import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {PostsCollection} from "../../../db/posts/collection";
import DevPost from '../../components/DevPost';
import LoadingSpinner from '../../components/LoadingSpinner'
;

const PostsPage = ({dev, posts}) => {
    
    return (
        <div className="posts-page-container">
            {     
                posts.length === 0 ? <LoadingSpinner /> : 
                posts.map((post,index) => <DevPost key={index} post={post} dev={dev}/>)
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({}).fetch()};

})(PostsPage)