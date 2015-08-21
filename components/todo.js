var React = require('react/addons');

var Todo = React.createClass({
	render : function () {
		return (
			<div>&bull;&nbsp;{this.props.text}</div>
		);
	}
});

module.exports = Todo;