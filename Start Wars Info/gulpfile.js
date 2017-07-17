var gulp = require('gulp'),
    browserify = require('browserify'),
    rename = require('gulp-rename'),
    es = require('event-stream'),
    uglify = require('gulp-uglify'),
    streamify = require('gulp-streamify'),
    source = require('vinyl-source-stream');

const files = [
    'index.js'
];

const public = './public/';
const rootJS = public + 'js/src/';
const outputJS = public + 'js/dist/';

gulp.task('dev', () => {
    const tasks = files.map((file) => {
        const filePath = rootJS + file;
        return browserify({
            entries: filePath,
            extensions: ['.js', '.jsx'],
            debug: true
        })
            .transform('babelify', { presets: ['es2015', 'stage-3', 'react'] })
            .transform('brfs')
            .bundle()
            .pipe(source(file))
            .pipe(rename((path) => {
                path.basename += '.bundle.min';
                path.extname = '.js'
            }))
            .pipe(gulp.dest(outputJS));
    });
    return es.merge.apply(null, tasks);

});

gulp.task('prod', () => {
    const tasks = files.map((file) => {
        const filePath = rootJS + file;
        return browserify({
            entries: filePath,
            extensions: ['.js', '.jsx'],
            debug: false
        })
            .transform('babelify', { presets: ['es2015', 'stage-3', 'react'] })
            .transform('brfs')
            .bundle()
            .pipe(source(file))
            .pipe(rename((path) => {
                path.basename += '.bundle.min';
                path.extname = '.js'
            }))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest(outputJS));
    });

    return es.merge.apply(null, tasks);

});

const watchJS = rootJS + '**/**';

gulp.task('watchDev', () => {
    process.env.NODE_ENV = 'development';
    gulp.watch([watchJS + '.js', watchJS + '.jsx'], ['dev']);
});

gulp.task('watchProd', () => {
    process.env.NODE_ENV = 'production'
    gulp.watch([watchJS + '.js', watchJS + '.jsx'], ['prod']);
});

gulp.task('develop', ['watchDev']);

gulp.task('production', ['watchProd']);
