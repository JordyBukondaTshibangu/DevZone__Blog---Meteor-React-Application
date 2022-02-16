import React from 'react'
import styled from 'styled-components';

const Posts = () => {
  return (
    <Container>
        <MainPost>
            <Category></Category>
            <MainPostTitle></MainPostTitle>
            <TagLine></TagLine>
            <Details></Details>
        </MainPost>
        <SecondaryPosts>
            <Post>
                <PostImageContainer>
                    <PostImg src="" alt="post-image"/>
                </PostImageContainer>
                <PostTitle></PostTitle>
                <PostTagline></PostTagline>
                <PostDetails>
                    <AuthorProfile></AuthorProfile>
                    <AuthorName></AuthorName>
                    <DatePublished></DatePublished>
                </PostDetails>
            </Post>
        </SecondaryPosts>
    </Container>
  )
}


const Container = styled.div`
    display : flex;
    flex-direction : column;
    gap : 20px;
    justify-items : center;
    align-items : center;
    padding : 20px;
`;
const MainPost = styled.div`
    background-url : ('');
`;
const Category = styled.span``;
const MainPostTitle = styled.h3``;
const TagLine = styled.p``;
const Details = styled.ul``;

const SecondaryPosts = styled.div`
    display : grid;
    grid-template-column : something that wraps;
`;

const Post = styled.div``;
const PostImageContainer = styled.div``;
const PostImg = styled.img``;
const PostTitle = styled.h4``;
const PostTagline = styled.p``
const PostDetails = styled.ul``;
const AuthorProfile = styled.li``;
const AuthorName = styled.li``;
const DatePublished = styled.li``;



export default Posts