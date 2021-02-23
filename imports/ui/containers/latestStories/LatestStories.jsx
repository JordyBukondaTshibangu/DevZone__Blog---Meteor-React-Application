import React from 'react';
import LatestStory from '../../components/latestStory/LatestStory.jsx';
import LatestStorySide from '../../components/latestStorySide/LatestStorySide.jsx';
import './LatestStories.css';


const LatestStories = ({posts}) => {
    
    const length = posts.length
    const latestStory = posts[length - 2];
    const latestStorySide = [posts[length-5], posts[length-3], posts[length - 4]];

    console.log(latestStory);
    
    return (
        <div className="latest-stories">
            <div>
                <LatestStory latestStory={latestStory}/>
            </div>
            <div className="latest-stories-side">
                {
                    latestStorySide.map((latestStorySide, index) => <LatestStorySide key={index} latestStorySide={latestStorySide} />)
                }
            </div>

        </div>
    )
}

export default LatestStories
