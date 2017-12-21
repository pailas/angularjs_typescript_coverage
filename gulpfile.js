var gulp = require('gulp'),
    open = require('gulp-open'),
    karma = require('karma'),
    replace = require('gulp-replace'),
    clean = require('gulp-clean'),
    templateCache = require('gulp-angular-templatecache'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript'),
    cleanCompiledTypeScript = require('gulp-clean-compiled-typescript');

    //Clean all temporary files or folders generated
gulp.task('cleanTS', function () {
    return gulp.src('./src/**/*.ts')
        .pipe(cleanCompiledTypeScript());
});

gulp.task('clean', ['cleanTS'], function () {
    return gulp.src(['coverage', './src/templates.js'], {
            read: false
        })
        .pipe(clean());
});

//TemplateCache all *.html pages
gulp.task('templates', ['clean'], function () {
    return gulp.src('./src/**/*.html')
        .pipe(templateCache('templates.js', {
            module: 'app.templates', //Name of AngularJS module
            root: '', //Prefix for template URLs.
            standalone: true // Create a new AngularJS module, instead of using an existing
        }))
        .pipe(gulp.dest('src'));
});

//Compile Typescript code to JS
gulp.task('compile', ['clean'], function () {
    let tsProject = typescript.createProject('tsconfig.json');
    return gulp.src('./src/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .js
        .pipe(sourcemaps.write({
            sourceRoot: __dirname
        }))
        .pipe(gulp.dest('./src'));
});

//Run unit tests on Headless browser and keep watching
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

//Run unit tests on chrome and ready for debugging and keep watching
gulp.task('test:debug', ['build'], function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            //action: 'run',
            singleRun: false,
            autoWatch: true,
            browsers: ['Chrome', 'karma-remap-istanbul']
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

//Run tests for one time and generate coverage
gulp.task('unit:coverage', ['build'], function (done) {
    return new karma.Server({
            configFile: __dirname + '/karma.conf.js',
            // action: 'run',
            reporters: ['dots', 'coverage', 'karma-remap-istanbul'],
        }, done)
        .on('error', function (err) {
            throw err;
        })
        .start();
});

//To open already generated coverage report
gulp.task('open:coverage', function () {
    return gulp.src('./coverage/html/index.html')
        .pipe(open());
});

//Run coverage once and open the report immediately
gulp.task('coverage', ['unit:coverage'], function () {
    return gulp.src('./coverage/html/index.html')
        .pipe(open());
});

//Build task to clean the temp folders, generate templates and compile TS to JS
gulp.task('build', ['clean', 'templates', 'compile']);

gulp.task('default', ['coverage', 'clean']);

gulp.task('test', function () {
    gulp.start('unit:test');
});