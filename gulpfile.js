const gulp = require('gulp');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint({"esversion": 6, "maxerr": 100}))
      .pipe(jshint.reporter('default'))
      //.pipe(uglify())
      //.pipe(minify())
      .pipe(concat('wsc-chrome.js'))
      .pipe(gulp.dest('build'));
});