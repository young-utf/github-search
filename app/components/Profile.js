/**
 * Created by youngmoon on 7/28/15.
 */

var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
    mixins: [Router.State, ReactFireMixin],
    getInitialState: function () {
        return {
            notes: [],
            bio: {},
            repos: []
        };
    },
    init: function () {
        helpers.getGithubInfo(this.getParams().username)
            .then(function (dataObj) {
                this.setState({
                    bio: dataObj.bio,
                    repos: dataObj.repos
                });
            }.bind(this));
    },
    componentDidMount: function () {
        this.init();
    },
    componentWillUnmount: function () {

    },
    componentWillReceiveProps: function () {
        this.init();
    },
    handleAddNote: function (newNote) {
        this.state.notes.push(newNote);
        var notes = this.state.notes;
        this.setState({
            notes:  notes
        });
    },
    render: function () {
        var username = this.getParams().username;
        return (
            <div className="row">
                <div className="col-md-4">
                    <UserProfile username={username} bio={this.state.bio} />
                </div>
                <div className="col-md-4">
                    <Repos username={username} repos={this.state.repos} />
                </div>
                <div className="col-md-4">
                    <Notes
                        username={username}
                        notes={this.state.notes}
                        addNote={this.handleAddNote} />
                </div>
            </div>
        )
    }
});

module.exports = Profile;