
import { FaUser, FaBook,FaComments} from 'react-icons/fa'
import styled from 'styled-components';

export const PostContainer = styled.div`
display : flex;
flex-direction : column;
justify-content : center;
padding : 35px 10px 0;
background: #fff;
margin-bottom : 30px;
max-width : 800px;
gap : 40px;
`;
export const PostTitle = styled.h3`
font-size : 2.7rem;
`;
export const Container = styled.div`
overflow: hidden;
background: #000;
`;

export const ImageContainer = styled.a`
width : 100%;
text-decoration : none;
outline : none;
transition : all 0.25s;
`;
export const Image = styled.img`
display : block;
width : 100%;
height : 470px;
transform : scale(1.1);
object-fit: cover;
transition : transform 500ms;

&:hover {
    transform : scale(1.02)
}
`;
export const PostInfo = styled.div`
display : flex;
justify-content : space-around;
font-size  : .8rem;
margin-top : 50px;
margin-bottom : 20px;
`;
export const PostInfoTag = styled.span`
display : flex;
align-items : baseline;
justify-content : space-between;
gap : 5px;
text-transform : uppercase;
`;

export const TextContainer = styled.div`
display : flex;
flex-direction : column;
align-items : start;
justify-content : start;
gap : 20px;
margin-left : 5px;
margin-right : 30px;
`;

export const PostDetails = styled.p``;

export const ReadMore = styled.p`
text-align: center;
font: 400 13px 'Lato', Helvetica, Arial, sans-serif;
color: #fdd835;
letter-spacing: 2px;
text-transform : uppercase;
`;
export const FontAwesomeUser = styled(FaUser)`
font-size : 10px;
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
`;

export const FontAwesomeBook = styled(FaBook)`
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
`;

export const FontAwesomeComment = styled(FaComments)`
display: inline-block;
font: normal normal normal 14px/1 FontAwesome;
font-size: inherit;
text-rendering: auto;
-webkit-font-smoothing: antialiased;
`;