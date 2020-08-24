import React from 'react';
import {Route} from 'react-router-dom';

import CreateEditPost from "./pages/create-edit-post/CreateEditPost";
import PostDetail from "./pages/post-detail/PostDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home-page/HomePage";
import PublicRouter from "./components/public-router/PublicRouter";
import PrivateRouter from "./components/private-router/PrivateRouter";
import UserPage from "./pages/user-page/UserPage";

const Routes = () => {
    return (
        <>
            <Route exact path={'/'} component={HomePage}/>
            <PrivateRouter path={'/create-post'} component={CreateEditPost}/>
            <Route path={'/post-detail/:id'} component={PostDetail}/>
            <PrivateRouter path={'/edit-post/:id'} component={CreateEditPost}/>
            <PrivateRouter path={'/my-page'} component={UserPage}/>
            <PublicRouter path={'/login'} component={Login}/>
            <PublicRouter path={'/register'} component={Register}/>

        </>
    );
};

export default Routes;