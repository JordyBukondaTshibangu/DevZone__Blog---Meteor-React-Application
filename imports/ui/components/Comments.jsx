import React, { useState } from 'react';

const Comments = ({ comments, dev, postId } ) => {

    const [ newComment, setNewComment ] = useState("");

    const handleAddComment = evt => {

        evt.preventDefault();

        const { email, fullName} = dev

        const commentObject = {  _id : postId, content : newComment, email, author : fullName}

        Meteor.call('post.comment', commentObject, error => {
            if(error) {
                console.log(error);
                return
            } 
            setNewComment("");
        })
    }
    
    return (
        <>
            <form onSubmit={handleAddComment}>
                <div className="input-comment">
                    <input type="text" placeholder="add comment" value={newComment} onChange={evt => setNewComment(evt.target.value)}/>
                    <button type="submit">Add Comment</button>
                </div>
            </form>
            <div>
                <ul>
                    {
                        comments.reverse().map((comment, index) => {

                            const { author, content, date } = comment

                            const getDate = date => {
                                let month = date.getMonth() + 1;
                                let day = date.getDate();
                                let year = date.getFullYear();
                        
                                return `${day}/${month}/${year}`
                            }

                            return (
                                <li key={index}>
                                <div className="comment-content">
                                    <h4>{author} <span> published : {getDate(date)}</span> </h4>
                                    <p>{content}</p>
                                </div>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Comments
