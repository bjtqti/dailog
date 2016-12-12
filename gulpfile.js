var gulp = require('gulp');
var postcss = require('gulp-postcss');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('css',function(){
	var processors = [
 
		require("postcss-import")(),
		require("postcss-url")(),
		require("postcss-cssnext")(),
		require("postcss-browser-reporter")(),
		require("postcss-reporter")()
	];

	return gulp.src('./css/*.css')
		.pipe(postcss(processors))
		.pipe(gulp.dest('./dest'))
		.pipe(reload({stream:true}))
});

gulp.task('server',['css'],function(){
	browserSync({
		server:{
			baseDir:'./'
		}
	});
})

gulp.task('watch',function(){
	gulp.watch(config.style,function(){
		//
	})
})

gulp.task('default',['server'])