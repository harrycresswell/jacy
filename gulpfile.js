var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');
var imagemin    = require('gulp-imagemin');
var pngquant    = require('imagemin-pngquant');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Minify images
 */
gulp.task('minify-images', function () {
    return gulp.src('./_images/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('./img/'));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', ['minify-images'], function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build', '--config', '_config.yml,_config_dev.yml'], {stdio: 'inherit'})
          .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['scripts', 'sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        notify: false
    });
});


// Scripts task to uglify the js
gulp.task('scripts', function(){
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix:'.min'}))
        .pipe(gulp.dest('_site/js'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('js'));
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    return gulp.src('src/sass/main.scss')
        .pipe(sass({
            includePaths: ['sass'],
            onError: browserSync.notify
        }))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('src/js/*js', ['scripts']);
    gulp.watch(['src/sass/**'], ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_config.yml', '_images/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['scripts', 'browser-sync', 'watch']);
