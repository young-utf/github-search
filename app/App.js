var React = require('react');
var Router = require('react-router');
var routes = require('./config/routes');

Router.run(routes, function (Root) {
    console.log('running');
    React.render(<Root />, document.getElementById('app'));
});
