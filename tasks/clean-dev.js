module.exports = (gulp, directory) => () => {

    const rimraf = require('gulp-rimraf');
    const path = require('path');

    return gulp.src([
        path.join(directory, 'node_modules'),
        path.join(directory, 'jspm_packages'),
        path.join(directory, 'typings'),
        path.join(directory, 'build')
    ])
        .pipe(rimraf({ force: true }));
};
