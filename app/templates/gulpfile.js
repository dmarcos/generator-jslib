var gulp = require('gulp');
var gulpif = require('gulp-if');
var clean = require('gulp-clean');
var rename = require('gulp-rename');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var stylish = require('jshint-stylish');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var flags = require('minimist')(process.argv.slice(2));

// Gulp command line arguments
var production = flags.production || flags.prod || false;
var watch = flags.watch;

// Basic usage
gulp.task('build',  ['clean'], function() {
  // Single entry point to browserify
  gulp.src('src/main.js')
      .pipe(browserify({
        insertGlobals : false, // Introduces all the node modules shims
        debug : !production, // Creates source maps if debug === true, gulp --production
      }))
      .pipe(gulpif(production, uglify()))
      .pipe(rename({
        dirname: './',
        basename: 'xboxpad',
        extname: '.js'
      }))
      .pipe(gulp.dest('./build/'))
      .pipe(gulpif(watch, livereload()));
});

gulp.task('lint', function() {
  return gulp.src('src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
});

gulp.task('clean', function() {
   return gulp.src(['./build'], {read: false})
          .pipe(clean({force: true}));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/*', ['lint', 'build']);
});

gulp.task('default', ['clean', 'lint', 'build']);
