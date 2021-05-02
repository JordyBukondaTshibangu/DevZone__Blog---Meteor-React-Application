import React, {useState} from 'react';
import Comment from '../../components/comment/Comment.jsx'

const Comments = ({comments, dev, postId}) => {

    const [newComment, setNewComment] = useState("");

    const handleAddComment = evt => {

        evt.preventDefault();

        const {email, fullName} = dev

        const commentObject = {
            _id: postId,
            content: newComment,
            email,
            author: fullName
        }

        Meteor.call('post.comment', commentObject, error => {
            if (error) {
                return
            }
            setNewComment("");
        })
    }

    return (
        <>
            <form onSubmit={handleAddComment}>
                <div className="input-comment">
                    <input type="text" placeholder="add comment"
                        value={newComment}
                        onChange={
                            evt => setNewComment(evt.target.value)
                        }/>
                    <button type="submit">Add Comment</button>
                </div>
            </form>
            <div>
                <ul> {
                    comments.map((comment, index) => <li key={index}>
                        <Comment comment={comment}/>
                    </li>)
                } </ul>
            </div>
        </>
    )
}

export default Comments
