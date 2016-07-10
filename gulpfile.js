var gulp         = require('gulp'),
    shell        = require('gulp-shell'),
    postcss      = require('gulp-postcss'),
    atImport     = require('postcss-import'),
    cssnext      = require('postcss-cssnext'),
    cssnano      = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    htmlmin      = require('gulp-html-minifier'),
  /*svgmin       = require('gulp-svgmin'),*/
    gzip         = require('gulp-gzip'),
    browserSync  = require('browser-sync').create(),
    reload       = browserSync.reload;

var processors = [
  atImport(),
  cssnext({
    'browsers': ['last 2 versions'],
    'features': {
      'customProperties': {
        preserve: true,
        appendVariables: true
      },
      'colorFunction': true,
      'customSelectors': true,
      'sourcemap': true,
      'rem': false
    }
  })
];

gulp.task('styles', function() {
  return gulp.src('_assets/src/style.css')
    .pipe(postcss(processors))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('_assets/css'));
});

gulp.task('jekyllBuildWatch',
  shell.task('bundle exec jekyll build --watch'));

gulp.task('jekyllBuild',
  shell.task('bundle exec jekyll build'));

gulp.task('minify', ['jekyllBuild'], function() {
  return gulp.src('_site/**/*.html')
    .pipe(htmlmin({
      collapseWhiteSpace: true,
      lint: true,
      minifyJS: true
    }))
    .pipe(gulp.dest('_site'));
});

// gulp.task('svgs', function() {
//     return gulp.src('_assets/imagessrc/*.svg')
//         .pipe(svgmin())
//         .pipe(gulp.dest('_assets/images'));
// });

gulp.task('serve', function() {
  browserSync.init({ server: { baseDir: '_site/' }, notify: false });
  gulp.watch('_assets/src/*.css', ['styles']);
  gulp.watch('_assets/css/style.css').on('change', reload);
  gulp.watch('_site/**/*.*').on('change', reload);
});

gulp.task('default', ['jekyllBuildWatch', 'serve', 'styles',]);

gulp.task('compress', ['styles', 'minify'], function () {
  return gulp.src('_site/**/*.html')
    .pipe(gzip())
    .pipe(gulp.dest('_site'));
});
