/**
 * Created by youngmoon on 7/30/15.
 */

var React = require('react');

var AddNote = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        addNote: React.PropTypes.func.isRequired
    },
    handleSubmit: function () {
        var newNote = this.refs.note.getDOMNode().value;
        this.refs.note.getDOMNode().value = '';
        this.props.addNote(newNote);
    },
    render: function () {
        return (
            <div className="input-group">
                <input type="text" className="form-control" ref="note" placeholder="Add a new note" />
                <span className="input-group-btn">
                    <button className="btn btn-default" type="button" onClick={this.handleSubmit}></button>
                </span>
            </div>
        )
    }
})