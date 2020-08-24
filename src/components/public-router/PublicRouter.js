import React from "react";
import { Route, Redirect } from 'react-router-dom';
import {getUser} from "../../helpers/common";

const PublicRouter = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) => !getUser() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
        />
    )
};

export default PublicRouter;