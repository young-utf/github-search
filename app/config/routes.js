/**
 * Created by youngmoon on 7/28/15.
 */

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import Profile from '../components/Profile.js';

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <Route name="profile" path="profile/:username" handler={Profile} />
        <DefaultRoute handler={Home} />
    </Route>
);