const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css');

gulp.task('css', () => {
  return gulp.src('./wufoo.scss')
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({format: 'beautify'}))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', () => {
  gulp.watch('./*.scss', ['css']);
});

gulp.task('default', ['watch', 'css']);