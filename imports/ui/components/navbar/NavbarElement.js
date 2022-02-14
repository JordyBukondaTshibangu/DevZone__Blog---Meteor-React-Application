import styled  from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FaBars} from 'react-icons/fa';

export const NavContainer = styled.nav`
    position : sticky;
    top : 0;
    left : 0;
    background-color : #000;
    color : #FFF;
    height : 80px;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;
export const NavLogo = styled(Link)`
    margin-left : 20px;
    font-size : 2.4rem;
    font-weight : 500;
    text-decoration : none;
    cursor : pointer;
    color : #FFF;

    &:hover {
        color : #01BF71
    }
`;
export const MobileIcon = styled(FaBars)`
    display : none;
    width : 30px;
    height : 30px;
`

export const NavItemContainer = styled.div`
    display : none;

    @media (min-width: 725px) { 
        display : flex;
        align-items : center;
        justify-content : space-between;
        gap : 50px;
    }
`;
export const NavItems = styled.ul`
    display : none;
    @media (min-width : 750px){
        display : flex;
        list-style : none;
        justify-content : space-between;
        align-items : center;
    }
`;
export const NavItem = styled.li`
    margin : 12px;
    min-width : fit-content;
    display : flex;
    justify-content : space-between;
    align-items : baseline;
    gap : 7.5px;
    cursor : pointer;

    &:hover {
        color : #01BF71;
        border-bottom : 3px solid #01BF71;
        transform : scale(1.02);
    }
`;
export const NavLink = styled(LinkScroll)`
    cursor : pointer;
    text-decoration : none;
    color : #FFF;
    height : 100%;
    transition : transform 0.2s ease-in-out;
`;

export const LoginButton = styled(Link)`
    margin-right : 20px;
    width : 150px;
    height : 40px;
    background : #01BF71;
    text-decoration : none;
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
`;