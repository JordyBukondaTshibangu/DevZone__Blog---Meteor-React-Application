import React from 'react';
import './LatestStorySide.css';

const LatestStorySide = ({latestStorySide}) => {
    return (
           <>
               {
                latestStorySide ? 
                <div className="side-story">
                    <div className="side-story-head">
                        <img src={latestStorySide.image} alt="/"/>
                    </div>
                    <div className="side-story-body">
                        <h2>{latestStorySide.title}</h2>
                        <p>{latestStorySide.tagline}</p>
                    </div>
                </div> : 
                null
               }
           </>
    )
}

export default LatestStorySide
