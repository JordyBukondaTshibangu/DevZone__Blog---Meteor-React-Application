import React from 'react';
import styled from 'styled-components';
import MostViewedPost from '../../components/mostViewedPost/MostViewedPost.jsx';

const MostViewed = ({mostViewedPosts}) => {

    const handleViewPost = (_id) => {
        // history.push(`/posts/${_id}`)
    }
    return (
        <ProfileContainer>
            <ProfilerTitle>Most View</ProfilerTitle>
            <PostContainer>
            {
                mostViewedPosts.length < 1 ? null : 
                mostViewedPosts.map((post, index) =>   <MostViewedPost key={index} mostViewedPost={post} onClick={()=> handleViewPost(post._id)}/> )
            }
            </PostContainer>
        </ProfileContainer>
    )
}

const ProfileContainer = styled.div`
    margin-top : 50px;
    background : #FFF;
    display : flex;
    flex-direction : column;
    align-items : center;
    gap : 20px;
    padding : 25px 35px 0;
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

const PostContainer = styled.div`
    display : flex;
    flex-direction : column;
    gap : 50px;
    padding: 10px 0;
`

export default MostViewed
