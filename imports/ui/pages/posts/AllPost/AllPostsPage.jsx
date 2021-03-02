import React, { useState, useEffect } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { FaSearch } from 'react-icons/fa';
import { PostsCollection } from "../../../../db/posts/collection";
import LoadingSpinner from '../../../feedback/LoadingSpinner'
import CategorySideBar from '../../../components/categorySideBar/CategorySideBar.jsx'
import AllPosts from '../../../containers/allPosts/AllPosts.jsx';
import './AllPostPage.css';


const PostsPage = ({ posts }) => {

    const [ search, setSearch ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ allPosts, setAllPosts ] = useState([]);

    useEffect(() => {
        setAllPosts(posts);
    })

    const filterPostByCategory = category => {
        setCategory(category)
    }
    return (
       <div className="posts-container">
            <div className="posts-container-header">
                <h3> All posts and Features content  </h3>
                <div className="search-bar">
                    <input type="text" placeholder="Search Post" value={search} onChange={event => setSearch(event.target.value)}/>
                    <div className="fa-icon-search">
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className="posts-content">
                <div>
                    <CategorySideBar filterPostByCategory={(category) => filterPostByCategory(category)}/>
                </div>
                <div>
                    {
                        allPosts.length < 1 ? <LoadingSpinner /> : <AllPosts posts={allPosts} search={search} category={category}/>
                    }
                </div>
            </div>
       </div>
    )
}


export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({}).fetch()};

})(PostsPage)
