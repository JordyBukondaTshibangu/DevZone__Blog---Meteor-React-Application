import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const NewPostPage = props => {

    let history = useHistory()
    const [title, setTitle ] = useState("");
    const [tagline, setTagline ] = useState("");
    const [description, setDescription ] = useState("");
    const [image, setImage ] = useState("");
    const [content, setContent ] = useState("");
    const [ error, setError ] = useState("");

    const submitPost = evt => {

        evt.preventDefault();

        const email = props.dev.email;
        const author = props.dev.fullName;

        const post = { title, tagline, description, image, author, email, content };

        Meteor.call('post.create', post, (error) => {
            if(error) setError("There was an error");

            history.push('/')
        })
    }


    return (
        <div className="new-post-container">
            { error }
            <h3>Add New Post </h3>
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
