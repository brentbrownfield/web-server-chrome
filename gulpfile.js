const gulp = require('gulp');
const jshint = require('gulp-jshint');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
gulp.task('js', function () {
   return gulp.src('js/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter('default'))
      .pipe(uglify())
      .pipe(minify())
      .pipe(concat('wsc-chrome.js'))
      .pipe(gulp.dest('build'));
});

/*
common.js
log-full.js
mime.js
buffer.js
request.js
stream.js
chromesocketxhr.js
connection.js
webapp.js
websocket.js
upnp.js
handlers.js
httplib.js
*/