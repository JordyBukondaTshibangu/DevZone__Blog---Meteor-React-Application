import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const FooterContainer = styled.footer`
    background : #000000;
`;
export const FooterWrap = styled.div`
    padding : 48px 24px;
    display : flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
    max-width : 1100px;
    margin : 0 auto;
`;
export const FooterLinksContainer = styled.div`
    display : flex;
    justify-content : center;
    padding-top : 32px;

    @media screen and (min-width : 820px){
        padding : 45px;
    }
`;
export const FooterLinksWrapper = styled.div`
    display : flex;
    flex-direction : column;
    
    @media screen and (min-width : 820px){
        flex-direction : revert;
    }
`;
export const FooterLinkItems = styled.div`
    display : flex;
    flex-direction : column;
    align-items : flex-start;
    margin : 0;
    padding : 10px;
    width : 100%;
    box-sizing : border-box;
    color : #FFF;
    text-align : left;

    @media screen and (min-width : 420px){
        margin : 16px;
        width : 160px
    }
`;
export const FooterLinkTitle = styled.h1`
font-size : 14px;
margin-bottom : 16px;
`;
export const FooterLink = styled(Link)`
    text-decoration : none;
    color : #FFF;
    margin-bottom : 0.5rem;
    font-size : 14px;

    &:hover {
        color : #01BF71;
        transition : 0.3s ease-out;
    }
`;

export const SocialMedia  = styled.div`
    max-width : 1000px;
    width : 100%;
`;
export const SocialMediaWrap = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : space-between;
    align-items : center;
    max-width : 1100px;
    margin: 40px auto 0 auto;

    @media screen and (min-width : 820px){
        flex-direction : revert
    }
`;
export const SocialIcons = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 240px;
`;
export const SocialLogo = styled(Link)`
    color : #FFF;
    justify-self : start;
    cursor : pointer;
    text-decoration : none;
    font-size : 1.5rem;
    display : flex;
    align-items : center;
    margin-bottom : 16px;
    font-weight : bold;
`;
export const SocialIconLink = styled.a`
    color : #FFF;
    font-size : 24px;
`;
export const WebsiteRights = styled.small`
    color : #FFF;
    margin-bottom : 16px;
`;