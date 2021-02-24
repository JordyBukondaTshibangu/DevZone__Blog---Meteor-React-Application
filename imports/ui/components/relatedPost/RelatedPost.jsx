import React from 'react';
import './RelatedPost.css';

const RelatedStory = ({post}) => {
    const { image, tagline, title } = post
    return (
        <>
            {
                post ? 
                <div className="side-story">
                    <div className="side-story-head">
                        <img src={image} alt="/"/>
                    </div>
                    <div className="side-story-body">
                        <h2>{title}</h2>
                        <p>{tagline}</p>
                    </div>
                </div> : 
                null
               }
        </>
    )
}

export default RelatedStory
