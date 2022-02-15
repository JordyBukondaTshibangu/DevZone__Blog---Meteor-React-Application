import React from 'react';
import styled from 'styled-components';

const MostViewedPost = ({mostViewedPost}) => {

    const { image, title } = mostViewedPost
    return (
           <>
            {
                mostViewedPost ? 
                <Post className="most-viewed-story">
                    <PostTitle>{title}</PostTitle>
                    <PostImg src={image}/>
                </Post> :
                null
            }
           </>
    )
}

const Post = styled.div`
    display : flex;
    justify-content : start;
    align-items : center;
    gap : 15px;
`;
const PostTitle = styled.h4`
    font-family: 'Roboto Slab', helvetica, sans-serif;
    text-transform : capitalize;
`;
const PostImg = styled.img`
    width : 60px;
    height : 60px;
    border-radius : 100%;
    border : none;
    object-fit : cover;
    order : -1
`

export default MostViewedPost
