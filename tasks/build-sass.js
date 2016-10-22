module.exports = (gulp, directory) => () => {

    const path = require('path');
    const sass = require('gulp-sass');

    var outputDir = '';

    return gulp.src([
        path.join(directory, '**', '*.scss'),
        path.join('!', directory, 'vendor', '**.ts'),
        path.join('!', directory, 'typings.d.ts')
    ], {base: './'})
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('./'));
};
