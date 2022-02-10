import React from 'react'

const LatestStory = ({latestStory}) => {
    
    return (
        <div>
            {
                latestStory ? 
                <div className="latest-story">
                    <div className="story-head">
                        <img src={latestStory.image} alt="/" />
                    </div>
                    <div className="story-body">
                        <h2>{latestStory.title}</h2>
                        <p>{latestStory.description}</p>
                    </div>
                </div> : 
        null
            }
        </div>
    )
}

export default LatestStory
