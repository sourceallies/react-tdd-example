var React = require('react/addons'),
    Todo = require('../components/todo.js'),
    TestUtils = React.addons.TestUtils;

describe('Todo', function () {

	it('is a valid React component', function () {
		var todo = TestUtils.renderIntoDocument(<Todo text='foo'/>);
		expect(todo).toBeTruthy();
	});

	it('contains a button for removing the Todo', function () {
		var todo = TestUtils.renderIntoDocument(<Todo text='foo'/>);
		var buttons = TestUtils.scryRenderedDOMComponentsWithTag(todo, 'button');
		expect(buttons.length).toEqual(1);
	});

	it('calls the remove() function via props when the remove button is pressed', function () {
		var removeStub = sinon.stub();
		var todo = TestUtils.renderIntoDocument(<Todo text='foo' remove={removeStub}/>);
		var removeButton = React.findDOMNode(todo.refs.removeButton);
		TestUtils.Simulate.click(removeButton);
		expect(removeStub.called).toBe(true);
	});

});