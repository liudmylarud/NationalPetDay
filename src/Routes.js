import React from 'react';
import {Route, Switch} from 'react-router-dom';

import CreateEditPost from "./pages/create-edit-post/CreateEditPost";
import PostDetail from "./pages/post-detail/PostDetail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import HomePage from "./pages/home-page/HomePage";
import PublicRouter from "./components/public-router/PublicRouter";
import PrivateRouter from "./components/private-router/PrivateRouter";
import UserPage from "./pages/user-page/UserPage";
import Gallery from "./pages/gallery/Gallery";
import About from "./pages/about/About";

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <PrivateRouter path={'/create-post'} component={CreateEditPost}/>
                <Route path={'/post-detail/:id'} component={PostDetail}/>
                <PrivateRouter path={'/edit-post/:id'} component={CreateEditPost}/>
                <PrivateRouter path={'/my-page'} component={UserPage}/>
                <PublicRouter path={'/login'} component={Login}/>
                <PublicRouter path={'/register'} component={Register}/>
                <Route path={'/gallery'} component={Gallery}/>
                <Route path={'/about'} component={About}/>
            </Switch>

        </>
    );
};

export default Routes;