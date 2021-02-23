import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { withTracker } from 'meteor/react-meteor-data';
import { useHistory } from 'react-router-dom';
// import { PostsCollection } from "../../../../db/posts/collection";


let  email = "jordytshibss@test.com";

const SinglePostPage = ({dev, post}) => {

    const devObj = dev

    if(!devObj){
        useHistory().push('/sign-in');
    } 

    const { title, tagline, description, image, author, content  } = post;

    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h3>{title}</h3>
                <p>Author : <strong>{author}</strong></p>
                <p>Tagline : <strong>{tagline}</strong></p>
            </div>
            <div>
                <p><strong>Description</strong> {description}</p>
                <p><strong>Content</strong> {ReactHtmlParser(content)}</p>
            </div>
        </div>
    )
}

export default withTracker(() => {

            Meteor.subscribe('pots');

            return { post : PostsCollection.findOne({email}).fetch()};

})(SinglePostPage)
