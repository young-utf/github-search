/**
 * Created by youngmoon on 7/28/15.
 */

var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
    <Route name="app" path="/" handler={Main}>
        <DefaultRoute handler={Home} />
    </Route>
);