const {src, series, dest, task} = require('gulp');
const sass =  require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const clean = require('gulp-clean');

function transpile(cb) {
  return src('./scss/style-all.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style-css.css'))
  .pipe(dest('./css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({
    suffix: ".min",
  }))
  .pipe(dest('css'));
}
function concatCss(cb) {
  return src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'css/style-css.min.css'])
  .pipe(concat('style-all.css'))
  .pipe(dest('./css/'))
}
let deleteFile = cb => {
  return src('./css/*.css', {read: false})
  .pipe(clean());
}
exports.clean = deleteFile;
exports.default = series(deleteFile, transpile, concatCss);