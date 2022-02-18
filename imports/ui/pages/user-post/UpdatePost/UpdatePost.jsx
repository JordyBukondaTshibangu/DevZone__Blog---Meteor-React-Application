import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Success from '../../../components/feedback/Success';
import Error from '../../../components/feedback/Error';

const UpdatePost = props => {
    
    const post = props.propsData.location.state;
    const { _id, title, tagline, description, image,  content, category } = post

    const [ updatedTitle, setTitle ] = useState(title);
    const [ updatedCategory, setCategory ] = useState(category);
    const [ updatedTagline, setTagline ] = useState(tagline);
    const [ updatedDescription, setDescription ] = useState(description);
    const [ updatedImage, setImage ] = useState(image);
    const [ updatedContent, setContent ] = useState(content);
    const [ error, setError ] = useState(false);
    const [ success, setSuccess ] = useState(false);

    const handleChange = (e, editor) => {
        const data = editor.getData();
        setContent(data);
    }

    const editPost = evt => {

        evt.preventDefault();
        
        const updatedPost = { _id, updatedTitle, updatedCategory, updatedTagline, updatedDescription, updatedImage, updatedContent }

        Meteor.call('post.update', updatedPost , error => {
            if(error) {
                setError(true);
                return;
            };

            setSuccess(true);
            setTimeout(()=> {
                // history.push('/home');
            },3000)
        })
        
    }
    return (
        <div className="new-post-container">
            { error && ReactDOM.createPortal( <Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback')) }
            <h3>Edit Post </h3>
            { success && ReactDOM.createPortal( <Success>Your Post was successfully updated!</Success>, document.getElementById('react-feedback')) }
            <form onSubmit={editPost}>
                <div className="header-container">
                    <div className="new-post-section">
                        <div className="input-group">
                            <input type="text" placeholder="Post title" value={updatedTitle} onChange={e => setTitle(e.target.value)} className="input-title" required/>
                        </div>
                        <div className="input-group">
                            <select value={updatedCategory} onChange={event => setCategory(event.target.value)}>
                                <option value="programming">{updatedCategory}</option>
                                <option value="programming">Programming</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="architecture">Architecture</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="tech">Tech</option>
                                <option value="artificial intelligence">Artificial intelligence</option>
                                <option value="culture">Culture</option>
                                <option value="music">Music</option>
                                <option value="religion">Religion</option>
                            </select>
                        </div> 
                        <div className="input-group">
                            <input type="text" placeholder="Add a small brieving of your post" value={updatedTagline} onChange={e => setTagline(e.target.value)} required/>
                        </div>
                        <div className="input-group">
                            <input type="text" value={updatedImage} onChange={e => setImage(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <input value={updatedDescription} onChange={e => setDescription(e.target.value)} className="description-text"/>
                        </div>
                    </div>
                    <div className="image-uploaded">
                        <img src={updatedImage} alt="/"/>
                    </div>
                </div>
                <div className="content-container">
                <CKEditor editor={ClassicEditor}
                        data={updatedContent}
                        onChange={handleChange}
                        style={
                            {
                            'margin-bottom': '400px'
                        }
                        }/>
                <button type="submit" className="new-post-section-button">Edit Post </button>
                </div>
           </form>
        </div>
    )
}

export default UpdatePost;


