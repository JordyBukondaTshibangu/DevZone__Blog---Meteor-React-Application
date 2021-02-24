import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';
import SinglePost from '../../../components/post/Post.jsx';
import RelatedStory from '../../../containers/relatedStories/RelatedStories.jsx'
import MostViewedPost from '../../../containers/mostViewed/MostViewed.jsx';
import { PostsCollection } from "../../../../db/posts/collection";
import './SinglePostPage.css';

const SinglePostPage = props => {
 
    const { dev, posts } = props
    const _id = props.propsData.computedMatch.params.postId;

    const devObj = dev
    if(!devObj){
        useHistory().push('/sign-in');
    } 

    const filteredPost = posts.filter(post => post._id === _id)
   

    const mostViewed = posts.sort((a,b) => b.likes - a.likes);

    const mostViewedPosts = mostViewed.filter((post, index) => {
        if(index < 8) return post
    }) 
    const relatedStories = posts.filter((post, index) => {
        if(index < 6) return post
    })

        
    return (
        <div className="single-post-container">
            <div className="single-post-top">
                <div className="single-post">
                    {
                        filteredPost[0] ? <SinglePost post={filteredPost[0]}/> : null
                    }
                </div>
                <div className="related-stories">
                    <h3>RELATED STORIES</h3>
                    <hr></hr>
                <RelatedStory posts={relatedStories} />
                </div>
            </div>
            <div>
                <h3>NEXT STORIES ON YOUR LIST</h3>
                <hr></hr>
                <MostViewedPost mostViewedPosts={mostViewedPosts} />
            </div>
        </div>
    )
}

export default withTracker(() => {

            Meteor.subscribe('posts');

            return { posts : PostsCollection.find({}).fetch()};

})(SinglePostPage)
