import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, BrowserRouter, Switch} from 'react-router-dom'

import Restaurants from '../components/HomePage/Restaurants';
import NewRestaurant from '../components/Forms/RestaurantForm';

const RestaurantsApp = (props, _railsContext) => (

    <Router history={BrowserRouter}>
        <div>
            <div className="header">
                <h1 className="">Chez-WeWork</h1>
            </div>
            <div className="wrapper-container">
                <div className="container">
                    <Switch>

                        <Route exact={true} path={"/"} render={() => <Restaurants {...props} />}/>
                        <Route exact={true} path={"/new"} component={NewRestaurant}/>

                        <Route render={() => <h1>404 not found </h1>}/>
                    </Switch>
                </div>
            </div>

        </div>

    </Router>
);

export default RestaurantsApp;
