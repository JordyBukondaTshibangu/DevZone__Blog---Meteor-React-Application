import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ReactDOM from 'react-dom';
import Success from '../../feedback/Success';
import Error from '../../feedback/Error';

const UpdatePost = props => {
    
    let history = useHistory();

    const post = props.propsData.location.state;
    const { _id, title, tagline, description, image,  content } = post

    const [ updatedTitle, setTitle ] = useState(title);
    const [ updatedTagline, setTagline ] = useState(tagline);
    const [ updatedDescription, setDescription ] = useState(description);
    const [ updatedImage, setImage ] = useState(image);
    const [ updatedContent, setContent ] = useState(content);
    const [ error, setError ] = useState(false);
    const [ success, setSuccess ] = useState(false);


    const editPost = evt => {

        evt.preventDefault();
        
        const updatedPost = { _id, updatedTitle,updatedTagline, updatedDescription, updatedImage, updatedContent }

        Meteor.call('post.update', updatedPost , error => {
            if(error) {
                setError(true);
                return;
            };

            setSuccess(true);
            setTimeout(()=> {
                history.push('/');
            },3000)
        })
        
    }


    return (
        <div className="new-post-container">
            { !error && ReactDOM.createPortal( <Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback')) }
            <h3>Edit Post </h3>
            { success && ReactDOM.createPortal( <Success>Your Post was successfully updated!</Success>, document.getElementById('react-feedback')) }
            <form onSubmit={editPost}>
              <div className="new-post-section">
                <div className="input-group">
                    <span>Title </span>
                    <input type="text" placeholder="Post title" value={updatedTitle} onChange={e => setTitle(e.target.value)} required/>
                </div>
                <div className="input-group">
                    <span>TagLine </span>
                    <input type="text" placeholder="Add a small brieving of your post" value={updatedTagline} onChange={e => setTagline(e.target.value)} required/>
                </div>
                <div className="input-group">
                    <span>Description </span>
                    <input type="text" placeholder="Add a description of your post" value={updatedDescription} onChange={e => setDescription(e.target.value)} required/>
                </div>
                <div className="input-group">
                    <span>Image url </span>
                    <input type="text" value={updatedImage} onChange={e => setImage(e.target.value)}/>
                </div>
                <div className="image-uploaded">
                    <img src={updatedImage} alt="/"/>
                </div>
                <div className="input-group input-group-content">
                    <span>Content </span>
                    <textarea value={updatedContent} onChange={e => setContent(e.target.value)} required></textarea>
                </div>
                <button type="submit">Edit Post </button>
                </div>
           </form>
        </div>
    )
}

export default UpdatePost;


