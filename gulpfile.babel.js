(() => {
  'use strict';
})();

import gulp from "gulp";
import mocha from "gulp-mocha";
import browserify from "browserify";
import source from "vinyl-source-stream";
import del from "del";

gulp.task('default', ['clean'], () => {
  gulp.start('build-js', 'copy-css', 'copy-html');
});

gulp.task('test', () => {
  return gulp.src('test/**/*_test.js', { read: false })
    .pipe(mocha({reporter: 'dot'}));
});

gulp.task('clean', () => {
  return del('dist/*');
});

gulp.task('build-js', () => {
  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("application.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task('copy-css', () => {
  return gulp.src('src/**/*.css')
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy-html', () => {
  return gulp.src('src/**/*.html')
    .pipe(gulp.dest('dist/'));
});
