var React = require('react/addons'),
    Todo = require('../components/todo.js'),
    TestUtils = React.addons.TestUtils;

describe('Todo', function () {

	it('is a valid React component', function () {
		var todo = TestUtils.renderIntoDocument(<Todo text='foo'/>);
		expect(todo).toBeTruthy();
	});

});