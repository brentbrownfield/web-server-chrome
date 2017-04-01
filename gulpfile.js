const gulp = require('gulp');
const jshint = require('gulp-jshint');
gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(minify())
      .pipe(concat('wsc-chrome.js'))
      .pipe(gulp.dest('build'));
});