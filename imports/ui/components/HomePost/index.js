import React from 'react'
import { PostContainer, PostTitle, PostInfo, PostDetails, PostInfoTag, Container, Image, ImageContainer,TextContainer, ReadMore, FontAwesomeBook, FontAwesomeComment, FontAwesomeUser} from './HomePostElement'

const HomePost = ({post}) => {


    const handleViewPost = (_id) => {
        // history.push(`/posts/${_id}`)
    }
  return (
    <PostContainer onClick={()=> handleViewPost(post._id)}>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
            <PostInfoTag><FontAwesomeUser/>{post.author}</PostInfoTag>
            <PostInfoTag><FontAwesomeBook/>{post.category}</PostInfoTag>
            <PostInfoTag><FontAwesomeComment/>{post.comments.lenght}</PostInfoTag>
        </PostInfo>
        <Container>
            <ImageContainer>
                <Image src={post.image} alt="/"/>
            </ImageContainer>
        </Container>
        <TextContainer>
            <PostDetails>{post.tagline}</PostDetails>
            <ReadMore>continue reading</ReadMore>
        </TextContainer>
    </PostContainer>
  )
}




export default HomePost