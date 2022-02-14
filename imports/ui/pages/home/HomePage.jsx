import React from 'react';
import {withTracker} from 'meteor/react-meteor-data';
import styled from 'styled-components';
import {PostsCollection} from "../../../db/posts/collection";
import BlogCategories from '../../containers/blogCategories/';
import MostViewed from '../../containers/mostViewed/MostViewed.jsx';
import DevZoners from '../../containers/devZoners/DevZoners.jsx';
import HomePost from '../../components/HomePost'
import DevProfile from '../../components/devProfile/DevProfile';



const HomePage = ({posts}) => {

    const mostViewed = posts.sort((a,b) => b.likes - a.likes);
    const mostViewedPosts = mostViewed.filter((post, index) => {
        if(index < 13) return post
    })

    return (
        <PageContainer>
            <Category>
                <BlogCategories/>
            </Category>
            <Container>
                <PostsContainer>
                    {
                        posts.map((post, index) => <HomePost key={index} post={post} />)
                    }
                </PostsContainer>
                <Side>
                    <DevProfile />
                    <MostViewed mostViewedPosts={mostViewedPosts} />
                    <DevZoners />
                </Side>
            </Container>
        </PageContainer>


    )
}


const PageContainer = styled.div`
    display : flex;
    flex-direction : column;
    overflow : hidden;
`;
const Category = styled.div``;
const Container = styled.div`
    width : 100%; 
    display : grid;
    grid-template-columns : 2fr 1fr;
    overflow : auto;
`;
const PostsContainer = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;
const Side = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
`;

export default withTracker(() => {

    Meteor.subscribe('posts', 3);

    return {posts: PostsCollection.find({}).fetch()};

})(HomePage);

