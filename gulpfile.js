'use strict';

var gulp = require('gulp'),
  concat = require('gulp-concat');



gulp.task('build', function () {
    gulp.src([
        'app/js/dispatcher/*.js',
        'app/js/components/*.js',
        'app/js/constants/*.js',
        'app/js/actions/*.js',
        'app/js/stores/*.js',
        'app/js/app.js'

    ])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('app'))
});

gulp.task('watch', function () {
    gulp.watch('app/**/*.js',['build']);
});

gulp.task('default',['build','watch']);
