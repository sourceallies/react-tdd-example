A TDD example using React, Karma, PhantomJS, Jasmine, and Sinon.

Setup instructions:

    git clone git@github.com:sourceallies/react-tdd-example.git
    cd react-tdd-example
    npm install
    npm install -g gulp-cli //if you do not already have gulp globally installed
    
To build the bundle:

    gulp build
    
To run tests:

    gulp test
    
Each "feature" is added in two separate commits.  The first commit, prefixed with "Failing", adds the failing test for the feature.  The second commit, prefixed with "Passing", implements the feature, causing the previously failing test to pass.
