import styled from 'styled-components';

export const PostContainer = styled.div`
min-height : 100vh;
max-width : 80%;
margin-top : 100px;
margin-left : auto;
margin-right : auto;
padding : 20px;
`;
export const PostForm = styled.form`
display : flex;
flex-direction : column;
`;
export const FormHeader = styled.div`
display : flex;
flex-direction : column;
gap : 50px;
margin-bottom : 50px;
`;
export const Input = styled.input`
font-size : ${({fontSize}) => fontSize ? fontSize : '1rem'} ;
background : transparent;
color : black;
border : none;
border-bottom : 1px solid #000;
outline : none;
width : fit-content;
min-width : 60%;
padding : 10px;
padding-left : 0;
`;
export const Category = styled.select`
width: 100%;
min-width: 15ch;
max-width: 30ch;
border: 1px solid #777;
border-radius: 0.25em;
padding: 0.25em 0.5em;
font-size: 1.25rem;
cursor: pointer;
line-height: 1.1;
letter-spacing : 1.2px;
text-transform : capitalize;
background-color: #fff;
background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
color : #777;
`;
export const CategoryOption = styled.option``;
export const ImageContainer = styled.div`
height : 400px;
width : 800px;
margin-bottom : 80px;
overflow : hidden;
`;
export const Img = styled.img`
width : 100%;
object-fit : cover;
transform : scale(1.1);
transition : transform 300ms ease-in-out;
&:hover {
    transform : scale(1);
}
`;
export const Button = styled.button`
margin-top : 20px;
width : 150px;
height : 40px;
background : #01BF71;
border : none;
display : flex;
justify-content : center;
align-items : center;
font-size : 1rem;
font-weight : 500;
color : #FFF;
transition : transform 300ms ease-in-out;
cursor : pointer;

&:active, :hover {
    background : #FFF;
    color : #000;
    transform : scale(1.02);
}
`