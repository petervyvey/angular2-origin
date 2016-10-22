const gulp = require('gulp');
const path = require('path');

const config = {
    projectDir: __dirname,
    configDir: path.join(__dirname, 'config'),
    taskDir: path.join(__dirname, 'tasks'),
    buildDir: path.join(__dirname, 'build'),
    srcDir: path.join(__dirname, 'src'),
    distDir: path.join(__dirname, 'dist'),
    tsLintConf: path.join(__dirname, 'tslint.json'),
    watchDir: path.join(__dirname, 'src')
};

gulp.task('clean:dev', require('./tasks/clean-dev')(gulp, config.projectDir));
gulp.task('clean:src', require('./tasks/clean-src')(gulp, config.srcDir));
gulp.task('clean:build', require('./tasks/clean-build')(gulp, config.buildDir));
gulp.task('clean:dist', require('./tasks/clean-dist')(gulp, config.distDir));
gulp.task('clean', ['clean:src', 'clean:build', 'clean:dist']);

gulp.task('check:tslint', ['check:tslint:src']);
gulp.task('check:tslint:src', require('./tasks/check-tslint')(gulp, config.srcDir, config.tsLintConf));
gulp.task('check', require('./tasks/check')());

gulp.task('build:application', ['check', 'build:sass'], require('./tasks/build-jspm')(gulp, config.srcDir + '/bootstrap', config.buildDir + '/application.min.js'));
gulp.task('build:sass', require('./tasks/build-sass')(gulp, config.srcDir));
gulp.task('build', ['clean'], require('./tasks/build')());

gulp.task('default', require('./tasks/default')());
