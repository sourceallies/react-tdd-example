var React = require('react/addons');

var Todo = React.createClass({
	render : function () {
		return (
			<div>
				<span>&bull;&nbsp;{this.props.text}</span>
				<button onClick={this.props.remove} ref='removeButton'>Remove</button>
			</div>
		);
	}
});

module.exports = Todo;