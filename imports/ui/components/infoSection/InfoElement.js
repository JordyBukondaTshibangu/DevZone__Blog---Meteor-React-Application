import styled from 'styled-components';


export const InfoContainer = styled.div`
    color : #FFF;
    background : ${({lightBg}) => lightBg ? '#F9F9F9' : '#010606'};
    padding : 100px 0;
`;
export const InfoWrapper = styled.div`
    display : flex;
    height : 860px;
    width : 100%;
    margin-left : auto;
    margin-right : auto;
    justify-content : center
`;
export const InfoRow = styled.div`
    display : grid;
    grid-auto-coulmns : minmax(auto,1fr);
    align-items : center;
    grid-template-areas : ${({imgStart}) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};

    @media screen and (min-width : 768px){
        grid-template-areas : ${({imgStart}) => imgStart ? `'col2 col1'` : `'col1 col2'`};
    }
`;
export const Column1 = styled.div`
    margin-bottom : 15px;
    padding : 0 15px;
    grid-area : col1;
`;

export const Column2 = styled.div`
    margin-bottom : 15px;
    padding : 0 15px;
    grid-area : col2;
`;
export const TextWrapper = styled.div`
    max-width : 540px;
    padding-top : 0;
    padding-bottom : 60px;
`;
export const TopLine = styled.p`
    color : #01BF71;
    font-size : 1rem;
    font-weight : 700;
    letter-spacing : 1.4px;
    text-transform : uppercase;
    margin-bottom : 16px;
`;
export const Heading = styled.h2`
    margin-bottom : 24px;
    line-height : 1.1;
    font-weight : 600;
    color : ${({lightText}) => lightText ? '#F7F8FA' : '#010606'};
    font-size : 2rem;

    @media screen and (min-width : 480px){
        font-size : 3rem
    }
`;
export const Subtitle = styled.div`
    max-width : 440px;
    margin-bottom : 35px;
    font-size : 1.2rem;
    line-height : 24px;
    color : ${({darkText}) => darkText ? '#010606' : '#FFF'};
`;
export const ButtonWrap = styled.div`
    display : flex;
    justify-content : flex-start;
`;
export const Button = styled.div``;

export const ImageWrapper = styled.div`
    max-width : 555px;
    height : 100%;
`;
export const Img = styled.img`
    width : 100%;
    margin : 0 0 10px 0;
    padding-right : 0;
`;