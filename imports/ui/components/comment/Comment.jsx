import React from 'react'

const Comment = ({comment}) => {
    const { author, date, content} = comment

    const getDate = date => {
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let year = date.getFullYear();

        return `${day}/${month}/${year}`
    }
    
    return (
        <div className="comment-content">
            <h4>{author} <span> published : {getDate(date)}</span> </h4>
            <p>{content}</p>
        </div>
    )
}

export default Comment
