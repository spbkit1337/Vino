

//минификация кода css
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('minify-css', () => {
  return gulp.src('style.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist'));
});



//разминификация css но делает код читабильным и безлишних пробелов
var gulp = require('gulp'),
    cssbeautify = require('gulp-cssbeautify');

gulp.task('beautify-css', function() {
    return gulp.src('style.css')
        .pipe(cssbeautify())
        .pipe(gulp.dest('./src/'));
});


//конвертировать картинки в формат webp

var gulp = require('gulp');
var webp = require('gulp-webp');
 
gulp.task('convert-webp', () =>
    gulp.src('./image/*.{png,jpg}')
        .pipe(webp())
        .pipe(gulp.dest('dist/image'))
);