import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, BrowserRouter, Switch} from 'react-router-dom'

import Restaurants from '../components/HomePage/Restaurants';
import NewRestaurant from '../components/Forms/NewRestaurant';


// See documentation for https://github.com/reactjs/react-redux.
// This is how you get props from the Rails view into the redux store.
// This code here binds your smart component to the redux store.
// railsContext provides contextual information especially useful for server rendering, such as
// knowing the locale. See the React on Rails documentation for more info on the railsContext
const RestaurantsApp = (props, _railsContext) => (

    <Router history={BrowserRouter}>
        <div>
            <h1>Chez-WeWork</h1>
            <Switch>

                <Route exact={true} path={"/"} render={() => <Restaurants {...props} />}/>
                <Route exact={true} path={"/new"} component={NewRestaurant}/>

                <Route render={() => <h1>404 not found </h1>}/>
            </Switch>

        </div>

    </Router>
);

export default RestaurantsApp;
