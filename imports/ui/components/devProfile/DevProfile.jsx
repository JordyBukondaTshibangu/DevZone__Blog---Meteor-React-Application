import React from 'react';
import styled from 'styled-components';

const DevProfile = ({devProfile}) => {

    // const { fullName, avatar, email, myBio } = devProfile

    return (
        <ProfileContainer>
            <ProfilerTitle></ProfilerTitle>
            <ProfileImgContainer>
                <ProfileImg src={'https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg'} alt='user-profile'/>
            </ProfileImgContainer>
            <ProfileInfo></ProfileInfo>
                <div className="dev-profile-info">
                    <ul>
                        <li>Full Name : <span>Jordy Tshibss</span></li>
                        <li>Email address : <span>jordy@firewrkx.co.za</span></li>
                        <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint id consequuntur sapiente quaerat impedit eveniet similique natus saepe commodi voluptatum nulla molestias repudiandae, corporis praesentium consectetur nemo maiores velit. Explicabo.</li>
                    </ul>
                    <hr></hr>
                    <p className="dev-profile-bio"></p>
                </div>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
    background : #333;
    
`;
const ProfilerTitle = styled.h3``;
const ProfileImgContainer = styled.div``;
const ProfileImg = styled.div``;
const ProfileInfo = styled.div``;


export default DevProfile
