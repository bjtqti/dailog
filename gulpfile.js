var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var watch  = require('gulp-watch');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('lint', function() {
	gulp.src('src/*.js')
		.pipe(jshint())
    	.pipe(jshint.reporter('default'));
});

gulp.task('mini-js',function(){
	gulp.src('src/*.js')
		.pipe(concat('app.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});

gulp.task('mini-css',function(){
	gulp.src('src/*.css')
});

gulp.task('watch',function(){
	gulp.watch('src/*.js',['minify']);
})

gulp.task('default',['lint','mini-js','watch']);