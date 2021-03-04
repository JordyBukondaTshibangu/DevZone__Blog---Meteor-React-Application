import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import {PostsCollection} from "../../../db/posts/collection";
import BlogCategories from '../../containers/blogCategories/BlogCategories.jsx';
import LatestStories from '../../containers/latestStories/LatestStories.jsx';
import MostViewed from '../../containers/mostViewed/MostViewed.jsx';
import DevZoners from '../../containers/devZoners/DevZoners.jsx'
import './HomePage.css';


const HomePage = ({posts, dev}) => {

    const mostViewed = posts.sort((a,b) => b.likes - a.likes);
    const mostViewedPosts = mostViewed.filter((post, index) => {
        if(index < 13) return post
    })

    return (
        <div className="home-page-container">
            <div className="blog-category-listing">
                <h3>BLOG CATEGORIES</h3>
                <hr></hr>
                <BlogCategories/>
            </div>
            <div>
                <h3>LATEST STORIES</h3>
                <hr></hr>
                <LatestStories posts={posts}/>
            </div>
            <div>
                <h3>MOST VIEWED</h3>
                <hr></hr>
                <MostViewed mostViewedPosts={mostViewedPosts} />
            </div>
            <div className="dev-zoners">
                <h3>DEV ZONERS</h3>
                <hr></hr>
                <DevZoners />
            </div>
        </div>


    )
}


export default withTracker(() => {

    Meteor.subscribe('posts', 3);

    return {posts: PostsCollection.find({}).fetch()};

})(HomePage);

