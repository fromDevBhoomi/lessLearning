var gulp = require('gulp'),
	minify = require('gulp-uglify');

gulp.task('default', function(){
	gulp.src('js/*.js')
	.pipe(minify())
	.pipe(gulp.dest('minjs'))
});

gulp.task('watch', function(){
	gulp.watch('js/*.js', ['default'])
});


//gulp.task('default', ['watch']);

