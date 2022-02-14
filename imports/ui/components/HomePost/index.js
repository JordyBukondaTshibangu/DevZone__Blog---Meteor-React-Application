import React from 'react'
import { useHistory } from 'react-router-dom';
import { FaUser, FaBook,FaPaperPlane} from 'react-icons/fa'
import styled from 'styled-components';

const HomePost = ({post}) => {

    let history = useHistory();

    const handleViewPost = (_id) => {
        history.push(`/posts/${_id}`)
    }

  return (
    <PostContainer onClick={()=> handleViewPost(post._id)}>
        <PostTitle>{post.title}</PostTitle>
        <PostInfo>
            <PostInfoTag><FontAwesomeUser/>{post.author}</PostInfoTag>
            <PostInfoTag><FontAwesomeBook/>{post.category}</PostInfoTag>
            <PostInfoTag><FontAwesomePaper/>{post.email}</PostInfoTag>
        </PostInfo>
        <ImageContainer>
            <Image src={post.image} alt="/"/>
        </ImageContainer>
        <TextContainer>
            <PostDetails>{post.tagline}</PostDetails>
            <ReadMore>continue reading</ReadMore>
        </TextContainer>
    </PostContainer>
  )
}


const PostContainer = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding : 35px 10px 0;
    background: #fff;
    margin-bottom : 30px;
    max-width : 800px;
    gap : 40px;
`;
const PostTitle = styled.h3`
    font-size : 2.7rem;
`;
const ImageContainer = styled.div`
    width : 100%;
    height : 470px;
    overflow : hidden;
    background: #000;
`;
const Image = styled.img`
    display : block;
    width : 100%;
    height : 100%;
    object-fit: cover;
    transition : transform 500ms;

    &:hover {
        transform : scale(0.9);
    }
`;
const PostInfo = styled.div`
    display : flex;
    justify-content : space-around;
    font-size  : .8rem;
    margin-top : 50px;
    margin-bottom : 20px;
`;
const PostInfoTag = styled.span`
    display : flex;
    align-items : baseline;
    justify-content : space-between;
    gap : 5px;
    text-transform : uppercase;
`;

const TextContainer = styled.div`
   display : flex;
   flex-direction : column;
   align-items : start;
   justify-content : start;
   gap : 20px;
   margin-left : 5px;
   margin-right : 30px;
`;

const PostDetails = styled.p``;

const ReadMore = styled.p`
    text-align: center;
    font: 400 13px 'Lato', Helvetica, Arial, sans-serif;
    color: #fdd835;
    letter-spacing: 2px;
    text-transform : uppercase;
`;
const FontAwesomeUser = styled(FaUser)`
    font-size : 10px;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
`;

const FontAwesomeBook = styled(FaBook)`
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
`;

const FontAwesomePaper = styled(FaPaperPlane)`
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
`;


export default HomePost