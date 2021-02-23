import React from 'react';
import { useHistory } from 'react-router-dom';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';
import './MostViewed.css'

const MostViewed = ({mostViewedPosts}) => {

    let history = useHistory();

    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }
    return (
        <div className="most-viewed">
            {
                mostViewedPosts.length < 1 ? null : 
                mostViewedPosts.map((post, index) =>  <div key={index} onClick={()=> handleViewPost(post._id)}> <MostViewedPost key={index} mostViewedPost={post} /></div>)
            }
        </div>
    )
}

export default MostViewed
