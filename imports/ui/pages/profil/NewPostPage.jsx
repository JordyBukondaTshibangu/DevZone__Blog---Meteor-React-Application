import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom'
import Success from '../../feedback/Success';
import Error from '../../feedback/Error';

const NewPostPage = props => {

    let history = useHistory()
    const [title, setTitle ] = useState("");
    const [tagline, setTagline ] = useState("");
    const [description, setDescription ] = useState("");
    const [image, setImage ] = useState("");
    const [content, setContent ] = useState("");
    const [ error, setError ] = useState(false);
    const [ success, setSuccess ] = useState(false);


    const submitPost = evt => {

        evt.preventDefault();

        const email = props.dev.email;
        const author = props.dev.fullName;

        const post = { title, tagline, description, image, author, email, content };

        Meteor.call('post.create', post, (error) => {
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
            { error && ReactDOM.createPortal( <Error>Oupsss...Something happened!</Error>, document.getElementById('react-feedback')) }
            <h3>Add New Post </h3>
            { success && ReactDOM.createPortal( <Success>Your Post was successfully created!</Success>, document.getElementById('react-feedback')) }
            <form onSubmit={submitPost}>
               <div className="new-post-section">
                    <div className="input-group">
                        <span>Title </span>
                        <input type="text"  value={title} onChange={e => setTitle(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <span>TagLine </span>
                        <input type="text" value={tagline} onChange={e => setTagline(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <span>Description </span>
                        <input type="text" value={description} onChange={e => setDescription(e.target.value)} required/>
                    </div>
                    <div className="input-group">
                        <span>Image url </span>
                        <input type="text" value={image} onChange={e => setImage(e.target.value)}/>
                    </div>
                   {
                       image ? 
                            <div className="image-uploaded">
                                <img src={image} alt="/"/>
                            </div> 
                            : 
                            null 
                   }
                   <div className="input-group input-group-content"> 
                    <span>Content </span>
                    <textarea value={content} onChange={e => setContent(e.target.value)} required></textarea>
                   </div>
                   <button type="submit">Add Post </button>
               </div>
               
           </form>
        </div>
    )
}

export default NewPostPage
