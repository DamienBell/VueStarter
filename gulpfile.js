const gulp     = require('gulp');
const cleanCSS = require('gulp-clean-css');
const debug    = require('gulp-debug');
const concat   = require('gulp-concat');

//Note: I'm specifying an array of files instead of using a wildcard
//to preserve the file order.
var cssfiles = [
  'public/css/bootstrap.css',
  'public/css/bootstrap-theme.css',
  'public/makeitmobile/css/font-awesome.min.css',
  'public/makeitmobile/css/components.css',
  'public/makeitmobile/css/custom.css'
];

//'public/dnatheme/**/*.css'
gulp.task('minify-css', function() {

    return gulp.src(cssfiles)
        .pipe(concat('styles.min.css'))
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('public/dist'))
});
