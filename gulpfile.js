  var gulp = require('gulp');
  var path = require('path');
  var webpack = require('webpack');
  var webpackOptions = require('./webpack.config.js');
  var WebpackDevServer = require('webpack-dev-server');
  var jest = require('gulp-jest').default;
  var jestConfig = require('./jest.config.js');
  var protractor = require("gulp-protractor").protractor;
  var webdriver_update = require("gulp-protractor").webdriver_update;
  var protractorConf = require('./protractor.conf.js');

  // for watching
  var paths = {
    js: [ '*.js' ],
    jsx: [ '*.jsx' ]
  };

  var isDev = ((process.env.NODE_ENV || 'development').trim().toLowerCase() === 'development');
  var webpackConfig;

  if(isDev) {
    webpackConfig = webpackOptions('dev');
  } else {
    webpackConfig = webpackOptions('prod');
  }

  gulp.task('jest', function () {
    process.env.NODE_ENV = 'test';

    return gulp.src('src/test').pipe(jest(jestConfig));
  });

  gulp.task('webdriver_update', function (callback) {
    webdriver_update({
        out_dir: path.resolve('protractor/webdriver')
    }, callback);
  });

  gulp.task('protractor', ['webdriver_update'], function(cb) {
    process.env.NODE_ENV = 'test';

    return gulp.src([]).pipe(protractor(protractorConf)).
    on('error', function(e) {
      console.log(e);
    });
  });

  gulp.task('build', function (callback) {
    webpack(webpackConfig, function (error, stats) {
      // if error do something here such as gutil error
      callback();
    });
  });

  gulp.task('serve', function (callback) {
    // webpack will serve on port 8090 and hot compile any changes
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, webpackOptions.devServer)
      .listen(8080, 'localhost', function () {});
  });

  gulp.task('watch', function (callback) {
    // watch for any changes to the js/jsx and build if detected
    gulp.watch(paths.js.concat(paths.jsx), ['build']);
  });

  gulp.task('default', ['watch', 'jest', 'serve']);
