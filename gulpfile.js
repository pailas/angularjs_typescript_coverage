var gulp = require('gulp'),
    open = require('gulp-open'),
    karma = require('karma'),
    replace = require('gulp-replace'),
    clean = require('gulp-clean'),
    templateCache = require('gulp-angular-templatecache'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

gulp.task('clean-ts', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});

gulp.task('clean', ['clean-ts'], function () {
    return gulp.src('./src/templates.js', {
            read: false
        })
        .pipe(clean());
});

gulp.task('templates', ['clean'], function () {
    return gulp.src('./src/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'app.templates', //Name of AngularJS module
            root: '', //Prefix for template URLs.
            standalone: true // Create a new AngularJS module, instead of using an existing
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('compile', ['clean'], function () {
    let tsProject = typescript.createProject('tsconfig.json');
    return gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js.pipe(replace(/(}\)\()(.*\|\|.*;)/g, '$1/* istanbul ignore next */$2'))
        .pipe(sourcemaps.write({
            sourceRoot: __dirname
        }))
        .pipe(gulp.dest('./src'));
});

gulp.task('unit:test', ['build'], function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            //action: 'run',
            singleRun: false,
            autoWatch: true
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

gulp.task('test:debug', ['build'], function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            //action: 'run',
            singleRun: false,
            autoWatch: true,
            browsers: ['Chrome']
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

gulp.task('unit:coverage', ['build'], function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            // action: 'run',
            reporters: ['dots', 'coverage'],
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

gulp.task('open:coverage', function () {
    return gulp.src('./coverage/view/index.html')
        .pipe(open());
});

gulp.task('coverage', ['unit:coverage'], function () {
    return gulp.src('./coverage/view/index.html')
        .pipe(open());
});

gulp.task('build', ['clean', 'templates', 'compile']);

gulp.task('default', function () {
    gulp.start('coverage');
});

gulp.task('test', function () {
    gulp.start('unit:test');
});