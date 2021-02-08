import React from 'react'



const PostCard = props => {

    const {title, tagline, image, author, createdAt} = props.post

    const date = (createdAt) => {
        let month = createdAt.getMonth() + 1;
        let day = createdAt.getDate();
        let year = createdAt.getFullYear();

        return `${day}/${month}/${year}`
    }
    
    return (
        <div className="card">
            <div className="card-head">
                <h3>{author}</h3>
                <span> published : {date(createdAt)}</span> 
                <h1>{title}</h1>
                <p>{tagline}</p>
            </div>
            <div className="card-img">
                <img src={image} alt="/" />
            </div>
            <div className="card-footer">
                like sections
            </div>
            
        </div>
    )
}

export default PostCard
