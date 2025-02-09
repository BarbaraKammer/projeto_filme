const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js')) // Alterado de dist/ para public/
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('./public/css')); // Alterado de dist/ para public/
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./public/images')); // Alterado de dist/ para public/
}

function fonts() {
    return gulp.src('./assets/fonts/**/*') // Caminho das fontes
        .pipe(gulp.dest('./public/fonts')); // Destino dentro de public
}


exports.default = gulp.parallel(styles, images, scripts,fonts);

exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles))
    gulp.watch('./src/scripts/*.js', gulp.parallel(scripts))
}
