import React from 'react';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';
import './MostViewed.css'

const MostViewed = ({mostViewedPosts}) => {

    return (
        <div className="most-viewed">
            {
                mostViewedPosts.length < 1 ? null : 
                mostViewedPosts.map((post, index) => <MostViewedPost key={index} mostViewedPost={post} />)
            }
        </div>
    )
}

export default MostViewed
