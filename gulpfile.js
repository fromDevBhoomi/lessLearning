/*
 *	GulpScript Task: Minifying JS, Compiling Sass to CSS, Watching for changes in files 
 */

var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	//sass = require('gulp-ruby-sass');
	sass = require('gulp-sass');

gulp.task('minifyJS', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('minjs'));
});


gulp.task('styles', function(){
	//console.log('Styles task working correctly');
	gulp.src('sass/**/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('css'));
});

gulp.task('watchChanges', function(){
	gulp.watch('sass/**/*.scss', ['styles']);
	gulp.watch('js/*.js', ['minifyJS']);
});

gulp.task('default', ['minifyJS', 'styles', 'watchChanges']);
