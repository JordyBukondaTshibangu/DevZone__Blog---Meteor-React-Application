import React from 'react';
import styled from 'styled-components';

const DevProfile = ({devProfile}) => {

    // const { fullName, avatar, email, myBio } = devProfile

    return (
        <ProfileContainer>
            <ProfilerTitle>About author</ProfilerTitle>
            <ProfileImgContainer>
                <ProfileImg src={'https://helostatus.com/wp-content/uploads/2021/09/HD-WhatsApp-profile.jpg'} alt='user-profile'/>
            </ProfileImgContainer>
            <ProfileInfo>
                <ProfileDetail>Jordy Tshibss</ProfileDetail>
                <ProfileDetail> jordy@firewrkx.co.za</ProfileDetail>
            <ProfileDetail> Lorem ipsum dolor sit amet consectetur adipisicing eProfileDetailt. Sint id consequuntur sapiente quaerat impedit eveniet simiProfileDetailque natus saepe commodi voluptatum nulla molestias repudiandae, corporis praesentium consectetur nemo maiores veProfileDetailt. .
                </ProfileDetail>
            </ProfileInfo>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
    background : #FFF;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 20px;
    padding : 25px 35px 50px;
`;
const ProfilerTitle = styled.h4`
    margin: 10px 0 20px 0;
    padding: 10px 0;
    position: relative;
    border-bottom: 2px solid #f5f5f5;

    ::after {
        content : '';
        width : 50px;
        height : 0px;
        position : absolute;
        left : 0;
        bottom -1.8px;
        border-bottom : 2px solid #fdd835;
    }
`;
const ProfileImgContainer = styled.div`
    text-align : center;
    padding-bottom : 25px; 
`;
const ProfileImg = styled.img`
    width : 200px;
    height : 200px;
    object-fit : cover;
    border-radius : 100%;
    border : 5px solid #f1f1f1;
`;
const ProfileInfo = styled.ul`
    list-style : none;
    display : flex;
    flex-direction : column;
    align-items : start;
    gap : 10px;
`;
const ProfileDetail = styled.li``;


export default DevProfile
