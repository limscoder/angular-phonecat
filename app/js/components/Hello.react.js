/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

    propTypes: {
        userName: React.PropTypes.string.isRequired,
        onNameChange: React.PropTypes.func
    },

    componentDidMount: function() {
        console.log('mounted', this.props);
    },

    getDefaultProps: function() {
        return {userName: 'Default Name'};
    },

    render: function() {
        return (<div>
          <span>Hello { this.props.userName }</span>
          <br />
          <button onClick={ this.onNameChange }>Click ME!</button>
        </div>);
    },

    onNameChange: function(event) {
        var newName = 'from button click';
        this.setProps({userName: newName});

        if (this.props.onNameChange) {
            this.props.onNameChange(newName);
        }
    }
});
