
import styled from 'styled-components';


export const PageContainer = styled.div`
    display : flex;
    flex-direction : column;
    overflow : hidden;
    gap : 20px;
    padding : 20px;
    padding-left : 50px;
    padding-right : 50px;
`;
export const Category = styled.div`
    margin-top : 100px;
`;
export const BlogContainer = styled.main`
    display : flex;
    justify-content : center;
    align-items : center;
`;
export const Container = styled.div`
    display : grid;
    grid-template-columns : 1.5fr 1fr;
    align-items: start;
    gap : 1rem;
`;
export const PostsContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    min-width : 700px;
`;
export const Side = styled.div`
    min-width : 250px;
    max-width : 400px;
    display : flex;
    flex-direction : column;
    align-items : center;
`;
