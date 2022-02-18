import React from 'react';
import styled from 'styled-components';
// import Jordy from '../../assets/Jordy.jpeg'

const AboutPage = () => {
    return (
        <Container>
            <Title>DEVZONE FOR YOU </Title>
                <Typography>DEV is a community of software developers getting together to help one another out. The software industry relies on     collaboration and networked learning. We provide a place for that to happen.
                    Our application is open source, meaning you can inspect every little detail of the code, or chip in yourself! We are working to make our platform available for anyone to stand up similar communities in any niche or passion.
                    We believe in transparency and adding value to the ecosystem. We hope you poke around and like what you see!
                </Typography>
            <SubTitle>Our Team </SubTitle>
            <SubContainer>
                <TeamMember>
                {/* <MemberImg src={'Jordy'} alt="" /> */}
                    Jordy Tshibangu
                    <Typography>Our company is led by Jordy Tshibangu (CEO) and was created on the 6th of february 2021.</Typography>
                </TeamMember>
                   
            </SubContainer>
        </Container>
    )
}

const Container = styled.div`
    margin : 50px;
    margin-left : auto;
    margin-right : auto;
    padding : 20px;
`;
const Title = styled.h3`
    font-weight: 800 !important;
    text-align : center;
    font-size: 72px !important;
    line-height: 76px !important;
`;
const Typography = styled.p`
    font-size: 24px !important;
    line-height: 32px !important;
    font-weight: 450;
`;
const SubTitle = styled.h4``;
const SubContainer = styled.div``;
const TeamMember = styled.div``;
const MemberImg = styled.img``

export default AboutPage
