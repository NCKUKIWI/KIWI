var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var browserSync = require('browser-sync').create();


gulp.task('scss', function() {
	return gulp.src('src/scss/*.scss')
	    .pipe(changed('dist/css', {extension:'.css'}))
	    .pipe(sass())
	    .pipe(gulp.dest('dist/css'))
	    .pipe(browserSync.stream());
});

gulp.task('js', function() {
	return gulp.src('src/js/*.js')
    	.pipe(changed('dist/js'))
    	.pipe(gulp.dest('dist/js'))
    	.pipe(browserSync.stream());
});

gulp.task('html', function() {
	return gulp.src('src/*.html')
    	.pipe(changed('dist'))
    	.pipe(gulp.dest('dist'))
    	.pipe(browserSync.stream());
});

gulp.task('php', function() {
	return gulp.src('src/*.php')
    	.pipe(changed('dist'))
    	.pipe(gulp.dest('dist'))
    	.pipe(browserSync.stream());
});

gulp.task('assets', function() {
	return gulp.src('src/{img,music}/**')
		.pipe(changed('dist'))
		.pipe(gulp.dest('dist'))
		.pipe(browserSync.stream());
});


gulp.task('compile', ['scss', 'js', 'html', 'php','assets']);

gulp.task('watch', ['compile'], function() {
	browserSync.init({
		server: {
			baseDir: 'dist'
		},
		startPath: '/index.html'
	});
	gulp.watch('src/scss/*.scss', ['scss']);
	gulp.watch('src/js/*.js', ['js']);
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/*.php', ['php']);
	gulp.watch('src/{img,music}/**', ['assets']);
});

gulp.task('default', ['watch']);
