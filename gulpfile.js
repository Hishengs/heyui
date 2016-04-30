// 引入 gulp
var gulp = require('gulp');

// 引入 Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');

// 创建 Compass 任务
//----------------css-----------------------
gulp.task('heyui', function() {
  gulp.src(['./css/base/base.css','./css/button/button.css','./css/form/form.css','./css/table/table.css'])
    .pipe(concat('heyui.css'))
    //.pipe(minify())
    .pipe(gulp.dest('./dist/css/'));
});
gulp.task('heyui-min', function() {
  gulp.src(['./css/base/base.css','./css/button/button.css','./css/form/form.css','./css/table/table.css'])
    .pipe(concat('heyui.min.css'))
    .pipe(minify())
    .pipe(gulp.dest('./dist/css/'));
});
//--------------js---------------------------
gulp.task('index', function() {
  gulp.src(['./js/index.js'])
    .pipe(concat('index.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/dist/'));
});
// 默认任务
gulp.task('default', function() {
    gulp.run('index');
});
gulp.task('watch-css', function() {
    //watch css
    gulp.watch(['./css/*.css','./css/essay/*.css','./css/piece/*.css'], function (event) {
        console.log('css changed!');
        gulp.run('index-css');
        gulp.run('plugins-css');
    });
});
gulp.task('watch', function () {
  //watch css
  gulp.watch(['./css/*.css','./css/essay/*.css','./css/piece/*.css'], function (event) {
      console.log('css changed!');
      gulp.run('index-css');
      gulp.run('plugins-css');
  });
  //watch index js change
  gulp.watch(['./js/index.js'], function (event) {
      console.log('index js changed!');
      gulp.run('index');
  });
  //rebuild app.js
  gulp.watch(['./js/angular/state/*.js','./js/angular/service/*.js','./js/angular/config.js','./js/angular/filter.js','./js/angular/home.js'], function (event) {
      console.log('app js changed!');
      gulp.run('ng-state');
      gulp.run('ng-service');
      gulp.run('ng-app');
  });
});
