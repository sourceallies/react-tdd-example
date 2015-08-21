//This file is only used for rendering our root component into the DOM
//No testing needs to be done here

var React = require('react/addons'),
    TodoList = require('./todoList.js');

React.render(
    <TodoList/>,
    document.getElementById('react')
);
