import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { FaSearch } from 'react-icons/fa';
import './AllPostPage.css';
import { PostsCollection } from "../../../../db/posts/collection";
import CategorySideBar from '../../../components/categorySideBar/CategorySideBar.jsx'
import AllPosts from '../../../containers/allPosts/AllPosts.jsx';
;

const PostsPage = ({posts}) => {
    
    return (
       <div className="posts-container">
            <div className="posts-container-header">
                <h3> All posts and Features content  </h3>
                <div className="search-bar">
                    <input type="text" placeholder="Search Post"/>
                    <div className="fa-icon-search">
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className="posts-content">
                <div>
                    <CategorySideBar />
                </div>
                <div>
                    <AllPosts posts={posts}/>
                </div>
            </div>
       </div>
    )
}


export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({}).fetch()};

})(PostsPage)
