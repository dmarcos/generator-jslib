var gulp = require('gulp');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

// Basic usage
gulp.task('build',  ['clean'], function() {
  // Single entry point to browserify
  gulp.src('src/main.js')
      .pipe(browserify({
        insertGlobals : false, // Introduces all the node modules shims
        debug : !gulp.env.production, // Creates source maps if debug === true
      }))
      .pipe(rename({
        dirname: './',
        basename: '<%= appname %>',
        extname: '.js'
      }))
      .pipe(gulp.dest('./build/'));
});

gulp.task('clean', function() {
   return gulp.src(['./build'], {read: false})
          .pipe(clean({force: true}));
});

gulp.task('default', ['clean', 'build'])