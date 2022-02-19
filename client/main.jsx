import "/imports/api/posts/client";
import "/imports/api/developers/client"

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route,Routes, BrowserRouter } from 'react-router-dom'
import { render } from 'react-dom';


import GlobalStyle from '../imports/ui/createGlobalStyle';
import UserContextProvider from '../imports/ui/context/UserContext'
import { App } from '/imports/ui/App';
import Footer from '../imports/ui/components/footer/Footer.jsx'
import LoginPage from '../imports/ui/pages/login/LoginPage.jsx';
import SignUp from '../imports/ui/pages/signup/SignUp.jsx';
import HomePage from '../imports/ui/pages/home';

import SinglePost from '../imports/ui/pages/posts/post/';
import PostsPage from '../imports/ui/pages/posts/posts/';
import MyPosts from '../imports/ui/pages/user-post/myPosts/MyPostsPage.jsx';
import UpdatePost from '../imports/ui/pages/user-post/UpdatePost/UpdatePost.jsx'
import NewPostPage from '../imports/ui/pages/user-post/NewPost/index.jsx';

import UpdateProfil from '../imports/ui/pages/profile/UpdateProfile/UpdateProfile';
import MyProfile from '../imports/ui/pages/profile/MyProfile/MyProfile.jsx';


import DevelopersPage from '../imports/ui/pages/developers/DevelopersPage.jsx';
import AboutPage from '../imports/ui/pages/about/index.jsx';



const routes = (

  <BrowserRouter>
    <UserContextProvider>
    <GlobalStyle />
      <Routes>
        <Route path="/" exact element={<LoginPage/>} />
        <Route path="/sign-up" exact element={<SignUp/>} />
      </Routes>
      <App /> 
       <Routes>
       <Route path="/home"  element={<HomePage/>} />
        <Route path="/posts"  element={<PostsPage/>} />
        <Route path="/my-posts"  element={<MyPosts/>} />
        <Route path="/new-post"  element={<NewPostPage/>} />
        <Route path="/posts/:postId"  element={<SinglePost/>} />
        <Route path="/update-post/:postId"  element={<UpdatePost/>} />
        <Route path="/my-profile"  element={<MyProfile/>} />
        <Route path="/update-my-profile"  element={<UpdateProfil/>} />
        <Route path="/devs"  element={<DevelopersPage/>} />
        <Route path="/about-us"  element={<AboutPage/>} />
       </Routes>
      <Footer />
    </UserContextProvider>
  </BrowserRouter>

)

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));
});
