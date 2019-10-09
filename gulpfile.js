const {src, series, dest} = require('gulp');
const sass =  require('gulp-sass');
sass.compiler = require('node-sass');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
var concat = require('gulp-concat');


function transpile(cb) {
  src('./scss/style-all.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('style-css.css'))
  .pipe(dest('./css'))
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({
    suffix: ".min",
  }))
  .pipe(dest('css'));
  cb();
}
function minify(cb) {
  src('css/style-css.css')
  .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(rename({
    suffix: ".min",
  }))
  .pipe(dest('css'));
  cb()
}
exports.default = series(transpile);