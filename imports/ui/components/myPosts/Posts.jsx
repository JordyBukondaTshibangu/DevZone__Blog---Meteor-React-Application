import React, {useState} from 'react'
import ReactHtmlParser from 'react-html-parser';
import {Link, useHistory } from 'react-router-dom';
import './Posts.css';

const SinglePost = props => {

    let history = useHistory();
    const [error, setError] = useState("");
    const [ showDescription, setShowDescription ] = useState(false);

    const {_id, title, tagline, description, image, author, content, createdAt, category } = props.post

    const propsObj = {
        pathname : `/update-post/${_id}`,
        state : { _id, title, tagline, description, image, category, content }
    }

    const date = (createdAt) => {
        let month = createdAt.getMonth() + 1;
        let day = createdAt.getDate();
        let year = createdAt.getFullYear();

        return `${day}/${month}/${year}`
    }

    const handleDeletePost = () => {
        Meteor.call('post.remove', _id, error => {
            if (error) {
                setError("There was an error");
                return
            }
            history.push('/my-posts')
        })
    }

    return (
        <div> {error}
               <div key={_id} className="post-card">
                        <div className="post-card-head">
                    <h3>{author}</h3>
                    <span> published : {date(createdAt)}</span> 
                    <h1>{title}</h1>
                    <button onClick={() => setShowDescription(!showDescription)} className="btn-description"> 
                        { showDescription ?  'Hide Description ' : 'show description'}
                    </button>
                    {
                        !showDescription ? null : (
                            <div className="post-description">
                                <p>Description</p>
                                <p>{description}</p>
                            </div>
                        )
                    }
                        <p>Content</p>
                        <p>{ReactHtmlParser(content)}</p>
                </div>
                <div className="post-card-img">
                    <img src={image} alt="/" />
                </div>
                <div className="post-card-footer">
                </div>
                <div className="btn-section">
                    <button>
                        <Link to={propsObj} className="edit-button"> Edit Post </Link>
                    </button>
                    <button onClick={handleDeletePost}>Delete Post</button>
                </div>
            </div>

        </div>
    )
}

export default SinglePost
