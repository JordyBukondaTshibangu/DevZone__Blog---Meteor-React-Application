import React, { useState } from 'react';
import { withTracker } from 'meteor/react-meteor-data'
import { PostsCollection } from '../../../api/collections/postCollections';

const PostsPage = props => {

    const [ showDescription, setShowDescription ] = useState(false);

    return (
        <div className="posts-page-container">
            {     
                props.posts.map((post,index) => {

                    const {title, description, content, image, author, createdAt} = post

                    const date = (createdAt) => {
                        let month = createdAt.getMonth() + 1;
                        let day = createdAt.getDate();
                        let year = createdAt.getFullYear();
                
                        return `${day}/${month}/${year}`
                    }

                    return (
                        <div key={index} className="post-card">
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
                                <p>{content}</p>
                        </div>
                        <div className="post-card-img">
                            <img src={image} alt="/" />
                        </div>
                        <div className="post-card-footer">
                            like sections
                        </div>
                        </div>)
                })
            }
        </div>
    )
}

export default withTracker(() => {
    Meteor.subscribe('posts');

    return { posts : PostsCollection.find({}).fetch()};

})(PostsPage)