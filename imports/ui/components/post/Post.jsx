import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';

const Post = ({post}) => {

    const { title, tagline, description, image, author, content  } = post;

    return (
        <div className="single-post">
            <h2>{title}</h2>
            <div className="single-post-img">
                <img src={image} alt="/" />
                <span>{author} || </span>
                <span><Link to="/devs"> - view authors &rarr;</Link></span>
            </div>
            <div className="single-post-content">
                <span>Tagline : </span>
                <p>{tagline}</p>
                <br></br>
                <hr></hr>
                <p><span>Description :</span>{description}</p>
                <br></br>
                <hr></hr>
                <div className="post-content">
                    {
                        
                        ReactHtmlParser(content)
                    }
                </div>
            </div>
        </div>
    )
}

export default Post
