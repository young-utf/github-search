/**
 * Created by youngmoon on 7/28/15.
 */
var React = require('react');

var UserProfile = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    render: function () {
        return (
            <div>
                User Profile <br/>
                Username: {this.props.username} <br />
                Bio: {this.props.bio}
            </div>
        )
    }
});

module.exports = UserProfile;