import React from 'react';
import InfoSection from '../../components/infoSection';
// import VideoMedia from '../../../../public/assets/videos/video.mp4'
import {Container, HeroContainer, HeroBg,Video, HeroContent, Title, Typography, SubContainer, SubTitle, TeamMember, MemberImg } from './AboutElement'
import { homeInfoOne, homeInfoThree, homeInfoTwo } from './data';

const AboutPage = () => {
    return (
        <Container>
            <HeroContainer>
                <HeroBg>
                    <HeroContent>
                        <Title>DEVZONE FOR YOU </Title>
                        <Typography>DEV is a community of software developers getting together to help one      another out. The software industry relies on     collaboration and networked learning. We provide a place for that to happen.
                            Our application is open source, meaning you can inspect every little detail of the code, or chip in yourself! We are working to make our platform available for anyone to stand up similar communities in any niche or passion.
                            We believe in transparency and adding value to the ecosystem. We hope you poke around and like what you see!
                        </Typography>
                    </HeroContent>
                    <Video autoPlay loop src={'VideoMedia'} type='video'/>
                </HeroBg>
            </HeroContainer>
            <InfoSection {...homeInfoOne}/>
            <InfoSection {...homeInfoTwo}/>
            <InfoSection {...homeInfoThree}/>
            <SubContainer>
                <SubTitle>Our Team </SubTitle>
                <TeamMember>
                {/* <MemberImg src={'Jordy'} alt="" /> */}
                    <Typography>Our company is led by Jordy Tshibangu (CEO) and was created on the 6th of february 2021.</Typography>
                </TeamMember>
                   
            </SubContainer>
        </Container>
    )
}



export default AboutPage
