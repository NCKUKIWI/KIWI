
// 原版------------------------------

// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var pug = require('gulp-pug');
// var minify = require('gulp-minify');
// var webserver = require('gulp-webserver');
// var imagemin = require('gulp-imagemin');
// var jshint = require('gulp-jshint');
// var notify = require('gulp-notify');
// var fileinclude = require('gulp-file-include');
// var cleanCSS = require('gulp-clean-css');


// done

// gulp.task('default', ['compresspug', 'sass', 'scss', 'minify-css', 'compressjs', 'imagemin', 'combine_html', 'webserver'], function() {
//   gulp.watch('src/SASS/*.sass', ['sass']);
//   gulp.watch('src/SCSS/*.scss', ['scss']);
//   gulp.watch('src/CSS/*.css', ['minify-css']);
//   gulp.watch('src/views/course/*.pug', ['compresspug', 'combine_html']);
//   gulp.watch('src/JS/*.js', ['compressjs']);
//   gulp.watch('src/views/*/*.html', ['combine_html']);
// });


// done

// gulp.task('compresspug', function buildHTML() {
//   return gulp.src('src/views/course/*.pug')
//     .pipe(pug({pretty: true}))
//     .pipe(gulp.dest('./src/views/course'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// ??

// // gulp.task('html', function () {
// //     return gulp.src(['./src/views/**/*.html'])
// //     .pipe(fileinclude())
// //     .pipe(gulp.dest('./dist/views'));
// // });


// done

// gulp.task('combine_html', function () {
//     return gulp.src('./src/views/index.html')
//     .pipe(fileinclude())
//     .pipe(gulp.dest('./'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// skip

// gulp.task('lint', function() {
//   return gulp.src('src/JS/**/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('default'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// skip

// gulp.task('imagemin', function () {
//   gulp.src('src/images/**/*')
//     .pipe(imagemin())
//     .pipe(gulp.dest('dist/images'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// done

// gulp.task('sass', function () {
//   return gulp.src('src/SASS/*.sass')
//     .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//     .pipe(gulp.dest('dist/CSS/course'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// done

// gulp.task('scss', function() {
// 	return gulp.src('src/SCSS/*.scss')
// 	    // .pipe(changed('dist/css', {extension:'.css'}))
// 	    .pipe(sass())
// 	    .pipe(gulp.dest('dist/CSS'))
//         .on("error", notify.onError(function (error) {
//             return "Error: " + error.message;
//         }));
// });


// skip

// // Task to minify css using package cleanCSs
// gulp.task('minify-css', () => {
//      // Folder with files to minify
//      return gulp.src(['src/CSS/**/*.css', 'src/CSS/*.css'])
//      //The method pipe() allow you to chain multiple tasks together
//      //I execute the task to minify the files
//     .pipe(cleanCSS())
//     //I define the destination of the minified files with the method dest
//     .pipe(gulp.dest('dist/CSS'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// done

// gulp.task('compressjs', function() {
//   gulp.src(['src/JS/*.js', 'src/JS/**/*.js'])
//     .pipe(minify({}))
//     .pipe(gulp.dest('dist/JS'))
//     .on("error", notify.onError(function (error) {
//         return "Error: " + error.message;
//     }));
// });


// abandoned

// gulp.task('webserver', function() {
//   gulp.src('./')
//     .pipe(webserver({
//       livereload: true
//     }));
// });





// 新版暫時--------------------------


var gulp = require('gulp');
var sass = require('gulp-sass');
var changed = require('gulp-changed');
var pug = require('gulp-pug');
var fileinclude = require('gulp-file-include');
var browserSync = require('browser-sync').create();
var notify = require('gulp-notify');


gulp.task('sass', function () {
    return gulp.src('src/SASS/*.sass')
        .pipe(changed('dist/CSS', {extension:'.css'}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/CSS'))
        .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
});

gulp.task('scss', function () {
    return gulp.src('src/SCSS/*.scss')
        .pipe(changed('dist/CSS', {extension:'.css'}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('dist/CSS'))
        .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
  });


gulp.task('js', function() {
	return gulp.src('src/JS/*.js')
        .pipe(changed('dist/JS'))
        .pipe(gulp.dest('dist/JS'))
        .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
});

// 檢查更動後是否能及時反應

gulp.task('compresspug', function buildHTML() {
    return gulp.src('src/views/course/*.pug')
        // .pipe(changed('src/views/course'))
        .pipe(pug({pretty: true}))
        .pipe(gulp.dest('src/views/course'))
        // .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
});

gulp.task('combine_html', ['compresspug'], function () {
    return gulp.src('src/views/index.html')
        // .pipe(changed('./'))
        .pipe(fileinclude())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
});

gulp.task('assets', function() {
	return gulp.src('src/{images,music}/**')
		.pipe(changed('dist'))
		.pipe(gulp.dest('dist'))
        .pipe(browserSync.stream())
        .on("error", notify.onError(function (error) {
            return "Error: " + error.message;
        }));
});



gulp.task('compile', ['sass','scss', 'js', 'compresspug', 'combine_html', 'assets']);

gulp.task('watch', ['compile'], function() {
	browserSync.init({
        port: 8000,
        proxy: 'http://localhost:3000/',
		// server: {
		// 	baseDir: './'
		// },
        // startPath: '/'
        reloadDelay: 1000       // 這要寫不然會出錯
    });
    gulp.watch('src/SASS/*.sass', ['sass']);
    gulp.watch('src/SCSS/*.scss', ['scss']);
    gulp.watch('src/JS/*.js', ['js']);
    gulp.watch('src/views/**', ['compresspug', 'combine_html']);
    // gulp.watch('src/views/*/*.pug', ['compresspug', 'combine_html']);
    // gulp.watch('src/views/*/*.html', ['compresspug', 'combine_html']);
    // gulp.watch('src/views/*.html', ['compresspug', 'combine_html']);
	gulp.watch('src/{images,music}/**', ['assets']);
});

gulp.task('default', ['watch']);


/* 
todo: 
    目前是後端跑在 3000（無法自動重新整理），
    前端跑在 8000、proxy 用 3000（可自動重新整理）
    可否讓他只跑在 3000 且能夠重新整理？
*/

