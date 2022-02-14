import React, {Component, useContext} from 'react';
import {authRoutes, publicRoutes} from "../routs";
import {MARKET_ROUTE} from "../utils/consts";
import {Routes, Route, Navigate} from 'react-router-dom';
import {Context} from "../index";
import Market from "../pages/Market";
const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    let routes = []
    // if(user.isAuth){
    //     routes =  authRoutes.map(({path, Component}) =>
    //         <Route key={path} path={path} component={Component} exact />
    //     )
    // }
    // const publicRouts =publicRoutes.map(({path, Component}) =>{
    //    console.log(path)
    // return <Route key={path} path={path} component={Component} exact />
    // })
    // routes = routes.concat(publicRoutes)

    return (
        <Routes>
            <Route path='/market' render={() => <div>Home</div>} />
            {/*<Navigate to={MARKET_ROUTE}/>*/}
        </Routes>
    );
};
export default AppRouter;