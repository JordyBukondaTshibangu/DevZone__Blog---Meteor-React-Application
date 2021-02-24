import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {useHistory} from 'react-router-dom';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Success from '../../../feedback/Success';
import Error from '../../../feedback/Error';
import './NewPostPage.css';

const NewPostPage = props => {

    let history = useHistory()
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [tagline, setTagline] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e, editor) => {
        const data = editor.getData();
        setContent(data);
    }

    const submitPost = evt => {
        evt.preventDefault();
        const email = props.dev.email;
        const author = props.dev.fullName;
        const post = { title, category, tagline, description, image, author, email, content };
    
        Meteor.call('post.create', post, (error) => {
            if (error) {
                setError(true);
                return 
            }

            setSuccess(true);
            setTimeout(() => {
                history.push('/');
            }, 3000)
        })
    }
    return (
        <div className="new-post-container">
            {
                error && ReactDOM.createPortal (<Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback'))
            }
            <h3> Share Your Story ... </h3>
            {
                success && ReactDOM.createPortal ( <Success>Your Post was successfully created!</Success>,document.getElementById('react-feedback'))
            }
            <form onSubmit={submitPost}>
                <div className="header-container">
                    <div className="new-post-section">
                        <div className="input-group">
                            <input type="text" placeholder="Headline" value={title} onChange={ e => setTitle(e.target.value)} className="input-title" required/>
                        </div>
                        <div className="input-group">
                            <select value={category} onChange={event => setCategory(event.target.value)}>
                                <option value="programming">Select a category</option>
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
                            <input type="text" placeholder="Add a description of less than 100 words" value={tagline} onChange={e => setTagline(e.target.value)}required/>
                        </div>
                        <div className="input-group">
                            <input type="text" placeholder="image url" value={image} onChange={ e => setImage(e.target.value)}/>
                        </div> 
                        <div className="input-group">
                            <input value={description} placeholder="Add a description of less than 200 words" onChange={ e => setDescription(e.target.value)} className="description-text" required/>
                        </div>
                    </div>
                    <div className="image-uploaded">
                        {
                            image &&   <img src={image} alt="/"/>
                        }
                    </div> 
                </div>
                <div className="content-container">
                    <CKEditor editor={ClassicEditor}
                        data={content}
                        onChange={handleChange}/> 
                    <button type="submit" className="new-post-section-button">Add Post </button>
                </div>
            </form>
        </div>
    )
}

export default NewPostPage
