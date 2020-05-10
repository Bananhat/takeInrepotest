import React from "react"
import {StaticRouter, Switch, Route } from "react-router-dom"
import LoginComponent from "../components/auth/LoginComponent"
import Registration from "../components/auth/Registration"
import ProductList from "../components/ProductList"


export class Routes extends React.PureComponent 
{
    render() {
        return (
            <StaticRouter>
                <Switch>
                    <Route path="/login" component={LoginComponent} />
                    <Route path="/register" component={Registration} />
                    <Route path="/" component = {ProductList} />
                </Switch>
            </StaticRouter>
        )
    }
}