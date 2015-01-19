'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    gulp.src('./app/scss/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({errLogToConsole: true}))
        //.pipe(sourcemaps.write())
        .pipe(gulp.dest('./app/css'))
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./app/css'));
});

gulp.task('watch', function() {
    gulp.watch('./app/scss/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);