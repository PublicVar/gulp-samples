var gulp = require('gulp'),
  livereload = require('gulp-livereload')
sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css/')).
    pipe(livereload());;
});

gulp.task('html', function() {
  gulp.src('./templates/**/*.twig')
   .pipe(livereload());
});

gulp.task('default', function() {
  livereload.listen();
  gulp.watch('./sass/**/*.scss',['styles']);
  gulp.watch('./templates/**/*.twig',['html']);
});
