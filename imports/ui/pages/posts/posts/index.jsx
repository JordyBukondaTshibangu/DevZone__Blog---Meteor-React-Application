import React from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import { PostsCollection } from '../../../../db/posts/collection';
import { FontAwesomeComment } from '../../../components/HomePost/HomePostElement';
import { Container, MainPost, Content, Category, MainPostTitle, TagLine, Details, FirstPostDetail, SecondaryPosts, Post, PostImageContainer, PostImg, PostContent, PostCategory, PostDetails, PostTagline, PostTitle, AuthorName} from './PostsElement'

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


export default withTracker(() => {

    Meteor.subscribe('posts', 5);

    return {posts: PostsCollection.find({}).fetch()};

})(Posts);