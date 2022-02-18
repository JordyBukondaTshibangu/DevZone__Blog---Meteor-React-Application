import styled from 'styled-components';


export const Container = styled.div`
`;
export const HeroContainer = styled.div`
    background-color : #fafafa;
    display : flex;
    justify-content : center;
    align-items : center;
    height : 800px;

    :before {
        content : '';
        position : absolute;
        top : 0;
        right : 0;
        bottom : 0;
        left : 0;
        background : linear-gradient(
            180deg, 
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%),
            linear-gradient(
                180deg,
                rgba(0,0,0,0.2) 0%,
                transparent 100%);
            )
    }
`;
export const HeroBg = styled.div`
    width : 100%;
    height : 100%;
    overflow : hidden;
    position : relative;
`;

export const Video = styled.video`
    width : 100%;
    height : 100%;
    object-fit : cover;
    -o-object-fit : cover;
    background : #fafafa;
`;
export const HeroContent = styled.div`
    position : absolute;
    width : 100%;
    height : 100%;
    color : #FFF;
    display : flex;
    flex-direction : column;
    justify-content : center;
    gap : 50px;
    align-items : center;
`;

export const Title = styled.h3`
    font-weight: 800 !important;
    text-align : center;
    font-size: 6rem !important;
    line-height: 76px !important;
    margin-bottom : 60px;
`;
export const Typography = styled.p`
    font-size: 24px !important;
    line-height: 32px !important;
    letter-spacing : 1.25px;
    font-weight: 450;
    max-width : 1000px;
    margin-left : auto;
    margin-right : auto;
    text-align : center;
    margin-bottom : 100px;

`;

export const SubContainer = styled.div`
    max-width : 1000px;
    margin-left : auto;
    margin-right : auto;
    margin-top : 100px;
`;
export const SubTitle = styled.h3`
    font-weight : 800;
    margin-bottom : 50px;
`;
export const TeamMember = styled.div``;
export const MemberImg = styled.img``