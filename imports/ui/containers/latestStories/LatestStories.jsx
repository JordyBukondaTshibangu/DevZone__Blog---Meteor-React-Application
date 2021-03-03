import React from 'react';
import { useHistory } from 'react-router-dom';
import LatestStory from '../../components/latestStory/LatestStory.jsx';
import LatestStorySide from '../../components/latestStorySide/LatestStorySide.jsx';
import './LatestStories.css';


const LatestStories = ({posts}) => {
    
    let history = useHistory();
    const length = posts.length
    const latestStory = posts[length - 1];
    
    const latestStorySide = [posts[length-2], posts[length-3], posts[length - 4]];
    
    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }
    
    return (
        <div className="latest-stories">
            <div onClick={() => handleViewPost(latestStory._id)}>
                <LatestStory latestStory={latestStory}/>
            </div>
            <div className="latest-stories-side">
                {
                    latestStorySide.map((latestStorySide, index) => <div key={index} onClick={()=> handleViewPost(latestStorySide._id)}><LatestStorySide latestStorySide={latestStorySide} /></div>)
                }
            </div>

        </div>
    )
}

export default LatestStories
