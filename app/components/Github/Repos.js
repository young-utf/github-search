/**
 * Created by youngmoon on 7/28/15.
 */
var React = require('react');

var Repos = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        repos: React.PropTypes.array.isRequired
    },
    render: function () {
        return (
            <div>
                REPOS <br />
                Username: {this.props.username} <br />
                REPOS: {this.props.repos}
            </div>
        )
    }
});

module.exports = Repos;