var React = require('react/addons'),
	Todo = require('./todo.js');

var TodoList = React.createClass({
	getInitialState : function () {
		return ({items : []});
	},
	add : function () {
		var text = React.findDOMNode(this.refs.textField).value;
		var items = this.state.items;
		items.push(text);
		this.setState({items : items});
	},
	remove : function (pos) {
		var items = this.state.items;
		items.splice(pos, 1);
		this.setState({items : items});
	},
	render : function () {
		var items = this.state.items.map(function (item, i) {
			return (
				<Todo key={i} text={item} remove={this.remove.bind(null, i)}/>
			);
		}.bind(this));
		return (
			<div>
				<h1>To-do List</h1>
				<br/>
				<ul>{items}</ul>
				<br/>
				<input type='text' ref='textField'/>
				<button onClick={this.add} ref='button'>Add item to list</button>	
			</div>
		);
	}
});

module.exports = TodoList;