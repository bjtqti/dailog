var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var browserSync = require('browser-sync');
var cssnext = require('cssnext');
var precss = require('precss');
var reload = browserSync.reload;


var config = {
	style : ['./css/*.css']
}

gulp.task('css',function(){
	var processors = [
		precss,
		cssnext,
		autoprefixer({browsers:['last 2 versions', 'Android >= 4.0']})
	];
	return gulp.src(config.style)
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