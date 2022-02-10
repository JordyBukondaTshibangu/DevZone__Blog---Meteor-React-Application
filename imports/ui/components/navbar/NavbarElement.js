import styled  from 'styled-components'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { FaHome, FaPlusSquare, FaUsers, FaBook, FaChild, FaUser, FaCog , FaBars} from 'react-icons/fa';

export const NavContainer = styled.nav`
    position : sticky;
    top : 0;
    left : 0;
    background-color : #000;
    color : #FFF;
    height : 100px;
    width : 100%;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 20px 30px;
`;
export const NavLogo = styled(Link)`
    font-size : 3rem;
    font-weight : 500;
    text-decoration : none;
    color : #FFF;

    &:hover {
        color : #01BF71
    }
    
`;
export const MobileIcon = styled(FaBars)`
    display : flex;
    width : 3rem;
    height : 3rem;

    @media(min-width: 750px){
    }
`
export const NavItems = styled.ul`
    display : none;
    @media (min-width : 750px){
        display : flex;
        list-style : none;
        justify-content : space-around;
        align-items : center;
        gap : 10px;
    }
`;
export const NavItem = styled.li`
    margin : 10px;
    font-size : 1.2rem;
`;
export const NavLink = styled(LinkScroll)`
    cursor : pointer;
    text-decoration : none;
    color : #FFF;

    &:active {
        color : #01BF71;
        border-bottom : 3px solid #01BF71;
    }
`;