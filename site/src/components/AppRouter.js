import React, {Component, useContext} from 'react';
import {authRoutes, publicRoutes} from "../routs";
import {Routes, Route, } from 'react-router-dom';
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    let routes = getRoutes(publicRoutes);

    if (user.isAuth) {
        routes = routes.concat(getRoutes(authRoutes));
    }

    return (
        <Routes>
            {routes}
        </Routes>
    );

    function getRoutes(list) {
        if (!list) {
            return [];
        }

        return list.map(({path, Component}) => (
            <Route key={path} path={path} element={<Component/>} exact/>
        ));
    }
};
export default AppRouter;