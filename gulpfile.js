'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function() {
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('browserSync', function(gulpCallback) {
    browserSync.init({
        // serve out of app/
        server: './',
        // launch default browser as soon as server is up
        open: true
    }, function callback() {
        // (server is now up)

        // watch html and reload browsers when it changes
        gulp.watch('index.html', browserSync.reload);

        // watch css and stream to BrowserSync when it changes
        gulp.watch('dist/css/**/*.css', function() {
            // grab css files and send them into browserSync.stream
            // this injects the css into the page
            gulp.src('dist/css/**/*.css')
                .pipe(browserSync.stream());
        });

        // watch js and stream to BrowserSync when it changes
        gulp.watch('src/js/**/*.js', function() {
            // grab css files and send them into browserSync.stream
            // this injects the css into the page
            gulp.src('src/js/**/*.js')
                .pipe(browserSync.stream());
        });

        // notify gulp that this task is done
        gulpCallback();
    });
});


gulp.task('default', ['sass:watch', 'browserSync']);
