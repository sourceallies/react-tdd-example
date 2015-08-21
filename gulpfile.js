var gulp = require('gulp');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var karmaServer = require('karma').server;

var path = {
    OUT            : 'bundle.js',
    DEST_BUILD     : '.',
    ENTRY_POINT    : './components/main.js',
    KARMA          : __dirname + '/karma.conf.js'
};

gulp.task('test', function (done) {
    karmaServer.start({
        configFile : path.KARMA
    }, function () {
        done();
    });
});

gulp.task('build', function () {
    browserify({
        entries   : [path.ENTRY_POINT],
        transform : [reactify]
    })
        .bundle()
        .pipe(source(path.OUT))
        .pipe(streamify(uglify(path.OUT)))
        .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('default', ['test', 'build']);