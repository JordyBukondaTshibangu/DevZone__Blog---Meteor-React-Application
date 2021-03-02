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
    const [ allPosts, setAllPosts ] = useState([]);

    useEffect(() => {
        setAllPosts(posts)
    })

    const handleSearch = event => {

        setSearch(event.target.value);

        const postsResults = allPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()));
        setAllPosts(postsResults)
        console.log(postsResults);
        console.log(allPosts, "All Posts");
    }
    return (
       <div className="posts-container">
            <div className="posts-container-header">
                <h3> All posts and Features content  </h3>
                <div className="search-bar">
                    <input type="text" placeholder="Search Post" value={search} onChange={event => handleSearch(event)}/>
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
                    {
                        allPosts.length < 1 ? <LoadingSpinner /> : <AllPosts posts={allPosts}/>
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
