/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
    getDefaultProps: function() {
        return {name: 'Default Name'};
    },

    render: function() {
        return <span>Hello { this.props.name }</span>;
    }
});