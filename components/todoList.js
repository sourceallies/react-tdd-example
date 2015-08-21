var React = require('react/addons');

var TodoList = React.createClass({
	render : function () {
		return (
			<div>
				<h1>To-do List</h1>
				<br/>
				<ul></ul>
				<br/>
				<input type='text'/>
				<button>Add item to list</button>	
			</div>
		);
	}
});

module.exports = TodoList;