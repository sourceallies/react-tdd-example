module.exports = function (config) {
    config.set({
        basePath: '',
        browsers: ['PhantomJS'], //run in PhantomJS
        logLevel: config.LOG_ERROR, //only show errors
        browserNoActivityTimeout: 100000, //prevent phantom from closing until tests are finished
        singleRun: true, //just run once by default
        frameworks: ['jasmine', 'phantomjs-shim', 'sinon', 'browserify'], //use the mocha test framework
        files: [
            'tests/*.js'
        ],
        preprocessors: {
            'tests/*.js': ['browserify']
        },
        reporters: ['spec'], //report results with spec reporter
        browserify: {
            transform: ['reactify'],
            extensions: ['.js', '.jsx'],
            debug: true,
            bundleDelay: 1000,
            options: {
                browserifyOptions: {
                    debug: true
                }
            }
        },
        phantomjsLauncher: {
            // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
            exitOnResourceError: true
        }
    });
};