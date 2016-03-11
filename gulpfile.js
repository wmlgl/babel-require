var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');
    del = require('del');

gulp.task('build', function() {
    return gulp.src(['lib/*.js','source/*.js'])
        .pipe(concat('babel-require.js'))    //合并所有js到main.js
        .pipe(gulp.dest('dest/'))    //输出main.js到文件夹
        .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('dest/'));  //输出
});

gulp.task('copy2demo', function() {
    return gulp.src('dest/*.js')
        .pipe(gulp.dest('examples/dest/'));    //输出main.js到文件夹
});

gulp.task('clean', function(cb) {
    del(['dest/*'], cb)
});

gulp.task('default', ['build','copy2demo']);
