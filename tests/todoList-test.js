var React = require('react/addons'),
    TodoList = require('../components/todoList.js'),
    TestUtils = React.addons.TestUtils;

describe('TodoList', function () {

	it('is a valid React component', function () {
		var todoList = TestUtils.renderIntoDocument(<TodoList/>);
		expect(todoList).toBeTruthy();
	});

});