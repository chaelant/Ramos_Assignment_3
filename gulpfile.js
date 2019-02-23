const gulp = require('gulp');
const concatenate = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoPrefix = require('gulp-autoprefixer');
const gulpSASS = require('gulp-sass');
const rename = require('gulp-rename');

const sassFiles = [
    './node_modules/tether/dist/css/tether.css',
    './src/variables.scss',
    './src/custom.scss'
];


const vendorJsFiles = [
    './node_modules/bootstrap/dist/js/bootstrap.min.js'
];

gulp.task('sass', gulp.series( () => {
    return gulp
        .src(sassFiles)
        .pipe(gulpSASS())
        .pipe(concatenate('styles.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(
            autoPrefix({
                browsers: ['last 2 versions'],
                cascade: false
            })
        )
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('./public/css'));
}));

gulp.task('js:vendor', gulp.series( () => {
    return gulp
        .src(vendorJsFiles)
        .pipe(concatenate('vendor.min.js'))
        .pipe(gulp.dest('./public/js/'));
}));

gulp.task('build', gulp.series('sass', 'js:vendor'));

gulp.task('watch', gulp.series(() => {
    gulp.watch(sassFiles, ['sass']);
}));

gulp.task('default', gulp.series('watch'));
