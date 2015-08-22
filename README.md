A [TDD](https://twitter.com/hashtag/tdd) example using [React](http://facebook.github.io/react/), [Karma](http://karma-runner.github.io/0.13/index.html), [PhantomJS](http://phantomjs.org/), [Jasmine](http://jasmine.github.io/), and [Sinon](http://sinonjs.org/).

Setup instructions:

    git clone git@github.com:sourceallies/react-tdd-example.git
    cd react-tdd-example
    npm install
    
To build the bundle:

    npm run build
    
To run tests:

    npm test
    
Each "feature" is added in two separate commits.  The first commit, prefixed with "Failing", adds the failing test for the feature.  The second commit, prefixed with "Passing", implements the feature, causing the previously failing test to pass.
