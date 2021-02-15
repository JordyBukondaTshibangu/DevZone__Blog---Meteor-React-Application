import React from 'react';
import { Link } from 'react-router-dom';



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
                <div className="view-all-posts">
                    <h4>View All Posts </h4><Link to="/posts">click here</Link>
                </div>
            </div>
            
        </div>
    )
}

export default PostCard
