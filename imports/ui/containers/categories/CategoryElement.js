import styled  from 'styled-components'
import { Link } from 'react-router-dom'

export const Topics = styled.div`
    padding : 20px 0;
    display : flex;
    align-items : center;
    justify-content : center;
    gap : 7.5px;
    background : #FFF;
`;

export const Typography = styled.h3`
    font-size : 1.2rem;
    display : flex;
    justify-content : center;
    align-items : center;
    padding : revert;
    padding-left : 15px;
`

export const TagContainer = styled.div`
    padding : 15px;
    display : flex;
    align-items : center;
    gap : 7.5px;
    overflow : auto;
`

export const Tag = styled.div`
    width : fit-content;
    min-width : 120px;
    max-width : 150px;
    padding : 3px 10px;
    height : 25px;
    border-radius : 50px;
    border : 1px solid #636363;
    display : flex;
    justify-content : center;
    align-items : center;
    color : #FFF;
    transition : transform 300ms ease-in-out;

    &:hover {
        color : #FFF;
        transform : scale(1.02);
    }
`

export const TagLink = styled(Link)`
    text-decoration : none;
    font-size : 0.8rem;
    font-weight : 800;
    color: #6a6359;
`