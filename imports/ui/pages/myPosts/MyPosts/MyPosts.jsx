import React from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { useHistory } from 'react-router-dom';
import SinglePost from '../../../components/SinglePost';
// import { PostsCollection } from "../../../../db/posts/collection";
import LoadingSpinner from '../../../components/LoadingSpinner';

let email = "jordytshibss@test.com"


const PostsPage = ({dev, posts}) => {

    const devObj = dev
    
    if(!devObj){
        useHistory().push('/sign-in');
    } 

    return (
        <div className="posts-page-container">
            {    
                posts.length === 0 ? <LoadingSpinner/> :  
                posts.map((post,index) => <SinglePost post={post} key={index}/>)
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({email}).fetch()};

})(PostsPage)