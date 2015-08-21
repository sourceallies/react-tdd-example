var React = require('react/addons');

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
	render : function () {
		var items = this.state.items.map(function (item, i) {
			return (
				<li key={i}>{item}</li>
			);
		});
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