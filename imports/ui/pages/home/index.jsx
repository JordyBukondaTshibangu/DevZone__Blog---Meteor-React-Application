import React from 'react';
import {withTracker} from 'meteor/react-meteor-data'; // TO CHANGE TO HOOK
import {PostsCollection} from "../../../db/posts/collection";
import BlogCategories from '../../containers/categories';
import MostViewed from '../../containers/mostViewed/MostViewed.jsx';
import HomePost from '../../components/HomePost';
import DevProfile from '../../components/devProfile/DevProfile';
import { PageContainer, Category, Container, PostsContainer, Side, BlogContainer} from './HomePageElement'



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
            <BlogContainer>
                <Container>
                    <PostsContainer>
                        {
                            posts.map((post, index) => <HomePost key={index} post={post} />)
                        }
                    </PostsContainer>
                    <Side>
                        <DevProfile />
                        <MostViewed mostViewedPosts={mostViewedPosts} />
                    </Side>
                </Container>
            </BlogContainer>
        </PageContainer>
    )
}



export default withTracker(() => {

    Meteor.subscribe('posts', 5);

    return {posts: PostsCollection.find({}).fetch()};

})(HomePage);

