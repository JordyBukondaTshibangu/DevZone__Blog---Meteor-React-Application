import React from 'react';
import { useHistory } from 'react-router-dom';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';


const AllPosts = ({posts, search, category }) => {
    let history = useHistory();

    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }
    
    return (
        <div style={{paddingLeft : '5px'}}>
            <div className="posts-list-result">
              {
                posts.length < 1 ? null : 
                posts
                .filter(post => {
                    if(search === ""){
                        return null
                    } else if (post.title.toLowerCase().includes(search.toLowerCase())){
                        return post
                    }  
                })
                .map((post, index) => <div onClick={() => handleViewPost(post._id)} key={index} ><MostViewedPost mostViewedPost={post}/></div>)
                }
            </div>
            { search !== "" ? <hr></hr> : null }
            <div className="posts-list">
                {
                    posts.length < 1 ? null : 
                    posts
                    .filter(post => {
                        if(category === ""){
                            return post
                        } else if (post.category.toLowerCase() === category.toLowerCase()){
                            return post
                        }
                    })
                    .map((post, index) => <div onClick={() => handleViewPost(post._id)} key={index} ><MostViewedPost mostViewedPost={post}/></div>)
                }
            </div>
        </div>
    )
}

export default AllPosts;
