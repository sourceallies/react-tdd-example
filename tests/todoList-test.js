var React = require('react/addons'),
    TodoList = require('../components/todoList.js'),
    Todo = require('../components/todo.js'),
    TestUtils = React.addons.TestUtils;

describe('TodoList', function () {

	it('is a valid React component', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		expect(todoList).toBeTruthy();
	});

	it('contains one un-ordered list', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		var unorderedLists = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'ul');
		expect(unorderedLists.length).toEqual(1);
	});

	it('contains one header', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		var headers = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'h1');
		expect(headers.length).toEqual(1);
	});

	it('contains an input for naming a new Todo', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		var inputs = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'input');
		expect(inputs.length).toEqual(1);
	});

	it('contains a button for adding a new Todo', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		var buttons = TestUtils.scryRenderedDOMComponentsWithTag(todoList, 'button');
		expect(buttons.length).toEqual(1);
	});

	it('should add new list items when the button is pressed', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		var button = React.findDOMNode(todoList.refs.button);
		var textField = React.findDOMNode(todoList.refs.textField);
		var expected = ['foo'];
		textField.value = 'foo';
		TestUtils.Simulate.click(button);
		expect(JSON.stringify(todoList.state.items)).toEqual(JSON.stringify(expected));
		textField.value = 'bar';
		TestUtils.Simulate.click(button);
		expected.push('bar');
		expect(JSON.stringify(todoList.state.items)).toEqual(JSON.stringify(expected));
		var listItems = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
		expect(listItems.length).toEqual(2);
	});

});