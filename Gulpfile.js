var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var util = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var jshint = require('gulp-jshint');
var rimraf = require('rimraf');

var dist_folder = 'assets';
var dev_folder = 'dev';

var path = {
    js : {
        src : dev_folder + '/scripts/**/*.js',
        dest : dist_folder + '/js'
    },
    scss : {
        src : dev_folder + 'styles/**/*.scss',
        dest : dist_folder + '/css'
    }
};

// Fixed scripts order
var scripts = [
];

gulp.task('connect', function(){
    connect.server({
        livereload : true,
        port : 8888
    });
});

gulp.task('scss', function(){
    return gulp.src( path.scss.src )
                .pipe( sourcemaps.init() )
                .pipe( sass().on('error', sass.logError) )
                .pipe( gulp.dest( path.scss.dest ) )
                .pipe( connect.reload() );
});

gulp.task('js', function(){
    return gulp.src( scripts )
                .pipe( concat( 'app.js' ) )
                .pipe( gulp.dest( path.js.dest ) )
                .pipe( connect.reload() );
});

gulp.task('js-deploy', function(){
    return gulp.src( scripts )
                .pipe( concat( 'app.js' ) )
                .pipe( uglify().on('error', util.log ) )
                .pipe( gulp.dest( path_dist.js ) );
});

gulp.task('scss-deploy', function(){
    return gulp.src( path.scss.src )
                .pipe( sass({
                    outputStyle : 'compressed'
                }).on('error', sass.logError) )
                .pipe( gulp.dest( path_dist.scss ) );
});

gulp.task('pages', function(){
    return gulp.src( path.pages.src, {base: '.'} )
        .pipe( connect.reload() )
        .on( 'error', util.log );
})

gulp.task('clean', function(cb){
    rimraf( dist_folder, cb );
});

gulp.task('deploy', ['clean', 'scss-deploy', 'js-deploy']);

gulp.task('watch', ['connect', 'scss', 'js'], function(){
    gulp.watch( path.js.src, ['js'] );
    gulp.watch( path.scss.src, ['scss'] );
});