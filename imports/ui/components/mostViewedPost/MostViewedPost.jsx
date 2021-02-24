import React from 'react';
import './MostViewedPost.css';

const MostViewedPost = ({mostViewedPost}) => {
    return (
           <>
            {
                mostViewedPost ? 
                <div className="most-viewed-story">
                    <div className="most-viewed-story-head">
                        <img src={mostViewedPost.image} alt="/"/>
                    </div>
                    <div className="most-viewed-story-body">
                        <h2>{mostViewedPost.title}</h2>
                        <p>{mostViewedPost.tagline}</p>
                    </div>
                </div> :
                null
            }
           </>
    )
}

export default MostViewedPost
