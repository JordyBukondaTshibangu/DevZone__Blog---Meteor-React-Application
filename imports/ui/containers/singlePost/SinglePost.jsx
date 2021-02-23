import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { FaRegHeart, FaRegComment } from 'react-icons/fa';
import Comments from './Comments';



const DevPost = props => {

    const {_id, title, description, content, image, author, likes, comments, createdAt} = props.post

    const [ showDescription, setShowDescription ] = useState(false);
    const [ showComment, setShowComment ] = useState(false);
    const [ addLike, setAddLike ] = useState(likes);

    const handleLike = () => {

        setAddLike(addLike + 1);

        const postItem = {
            like : addLike + 1,
            _id
        }
        Meteor.call('post.like', postItem, error => {
            if(error) return
        })        
    }

    const date = (createdAt) => {
        let month = createdAt.getMonth() + 1;
        let day = createdAt.getDate();
        let year = createdAt.getFullYear();

        return `${day}/${month}/${year}`
    }

    return (
        <div className="post-card">
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
            <div className="likes" onClick={handleLike}><span>{addLike}</span><FaRegHeart/></div>
            <div className="comments" onClick={() => setShowComment(!showComment)}><span>Show comments</span><FaRegComment/></div>
        </div>
        {
            !showComment ? null : (
                <div className="comment-section">
                        <Comments comments={comments} dev={props.dev} postId={_id}/>
                </div>
            )
        }
        </div>)
}

export default DevPost
