import React from 'react'
import styled from 'styled-components';
import { withTracker } from 'meteor/react-meteor-data'
import { PostsCollection } from '../../../db/posts/collection';
import { FontAwesomeComment } from '../../components/HomePost/HomePostElement';

const Posts = ({posts}) => {

const firstPost = posts[0];


  return (
    <Container>
        <MainPost img={firstPost?.image}>
            <Content>
                <Category>{firstPost?.category}</Category>
                <MainPostTitle>{firstPost?.title}</MainPostTitle>
                <TagLine>{firstPost?.tagline}</TagLine>
                <Details>
                    <FirstPostDetail>{firstPost?.author}</FirstPostDetail>
                    {/* <FirstPostDetail>{firstPost?.createdAt}</FirstPostDetail> */}
                    <FirstPostDetail><FontAwesomeComment/><span>{firstPost?.comments.length}</span></FirstPostDetail>
                </Details>
           </Content>
        </MainPost>
        <SecondaryPosts>
           {
               posts.map((post, index) => (
                <Post key={index}>
                    <PostImageContainer>
                        <PostImg src={post.image} alt="post-image"/>
                    </PostImageContainer>
                    <PostContent>
                        <PostCategory>{post?.category}</PostCategory>
                        <PostTitle>{post.title}</PostTitle>
                        <PostTagline>{post.tagline}</PostTagline>
                        <PostDetails>
                            <AuthorName>{post?.author}</AuthorName>
                            {/* <DatePublished>{post?.createdAt}</DatePublished> */}
                        </PostDetails>
                    </PostContent>
                </Post>
               ))
           }
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
    padding : 20px
`;
const MainPost = styled.div`
    padding-top : 15%;
    color : #FFF;
    background-image : url(${
        ({img}) => (img !== '' ? img : 'blue')
    });
    background-color: #cccccc;
    background-repeat : no-repeat;
    background-size: cover;
    margin-bottom : 50px;
    max-width : 95%;
`;
const Content = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : start;
    gap : 20px;
    text-align : start;
    padding : 20px;
    padding-left : 50px;
    color : #FFF;
    opacity : 1;
`;

const Category = styled.span`
    font-size : 1.2rem;
    font-weight : 800;
    text-transform : uppercase;
    color : #FFF;
`;
const MainPostTitle = styled.h3`
    width : fit-content;
    padding : 0;
    color : #FFF !important;
    font-weight : 800;
    letter-spacing : 1px;
`;
const TagLine = styled.p`
    padding : 0;
    color : #FFF;
`;
const Details = styled.ul`
    list-style : none;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;
const FirstPostDetail = styled.li`
    display : flex;
    align-items : baseline;
    gap : 5px;
`;
const SecondaryPosts = styled.div`
    display : grid;
    grid-template-columns : repeat(auto-fill, minmax(min(250px,100%),1fr));
    gap : 35px 15px;
    max-width : 95%;
    padding : 10px;
`;

const Post = styled.div`
    display : column;
    justify-content : start;
    background : #FFF;
    min-height : 400px;
    max-height : 600px;
`;
const PostImageContainer = styled.div`
    width : 100%;
    height : 220px;
`;
const PostImg = styled.img`
    width : 100%;
    height : 100%;
    object-fit: cover;
`;

const PostContent = styled.div`
    padding : 20px;
    display : flex;
    flex-direction : column;
    gap : 20px;
`;
const PostCategory = styled.span`
    color : #000;
    text-transform : uppercase;
    font-weight : 800;
    font-size : 0.8rem;
`;
const PostTitle = styled.h4`
    font-size : 1.3rem;
    text-transform : none;
    font-weight : 600;
    letter-spacing : 1px;
`;
const PostTagline = styled.p`
    padding : 0;
    display : -webkit-box;
    -webkit-box-orient : vertical;
    -webkit-line-clamp : 3;
    overflow : hidden;
`
const PostDetails = styled.ul`
    list-style : none;
    display : flex;
`;
const AuthorName = styled.li``;
// const DatePublished = styled.li``;



export default withTracker(() => {

    Meteor.subscribe('posts', 5);

    return {posts: PostsCollection.find({}).fetch()};

})(Posts);