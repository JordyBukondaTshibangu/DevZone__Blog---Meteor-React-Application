import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import {PostsCollection} from "../../../db/posts/collection";
import DevPost from '../../components/DevPost';
;

const PostsPage = props => {
    
    return (
        <div className="posts-page-container">
            {     
                props.posts.map((post,index) => <DevPost key={index} post={post} dev={props.dev}/>)
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({}).fetch()};

})(PostsPage)