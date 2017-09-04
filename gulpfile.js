var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass');

gulp.task('minifyJS', function(){
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('minjs'));
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['minifyJS'])
});

gulp.task('default', ['minifyJS', 'watch']);

//console.log(sass);