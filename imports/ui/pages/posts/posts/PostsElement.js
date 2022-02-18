import styled from 'styled-components';


export const Container = styled.main`
display : flex;
flex-direction : column;
gap : 20px;
justify-items : center;
align-items : center;
padding : 5px;
padding-top : 20px;
`;
export const MainPost = styled.div`
padding-top : 15%;
color : #FFF;
background-image : url(${
    ({img}) => (img !== '' ? img : 'blue')
});
background-color: #cccccc;
background-repeat : no-repeat;
background-size: cover;
margin-bottom : 30px;
max-width : 95%;
`;
export const Content = styled.div`
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

export const Category = styled.span`
font-size : 1.2rem;
font-weight : 800;
text-transform : uppercase;
color : #FFF;
`;
export const MainPostTitle = styled.h3`
width : fit-content;
padding : 0;
color : #FFF !important;
font-weight : 800;
letter-spacing : 1px;
`;
export const TagLine = styled.p`
padding : 0;
color : #FFF;
`;
export const Details = styled.ul`
list-style : none;
display : flex;
justify-content : space-between;
align-items : center;
`;
export const FirstPostDetail = styled.li`
display : flex;
align-items : baseline;
gap : 5px;
`;
export const SecondaryPosts = styled.div`
display : grid;
grid-template-columns : repeat(auto-fill, minmax(min(250px,100%),1fr));
gap : 35px 15px;
max-width : 95%;
padding : 10px;
`;

export const Post = styled.div`
display : column;
justify-content : start;
background : #FFF;
min-height : 400px;
max-height : 600px;
`;
export const PostImageContainer = styled.div`
width : 100%;
height : 220px;
`;
export const PostImg = styled.img`
width : 100%;
height : 100%;
object-fit: cover;
`;

export const PostContent = styled.div`
padding : 20px;
display : flex;
flex-direction : column;
gap : 20px;
`;
export const PostCategory = styled.span`
color : #000;
text-transform : uppercase;
font-weight : 800;
font-size : 0.8rem;
`;
export const PostTitle = styled.h4`
font-size : 1.3rem;
text-transform : none;
font-weight : 600;
letter-spacing : 1px;
`;
export const PostTagline = styled.p`
padding : 0;
display : -webkit-box;
-webkit-box-orient : vertical;
-webkit-line-clamp : 3;
overflow : hidden;
`
export const PostDetails = styled.ul`
list-style : none;
display : flex;
`;
export const AuthorName = styled.li``;
// export const DatePublished = styled.li``;


