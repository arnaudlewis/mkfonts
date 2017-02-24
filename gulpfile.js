var gulp = require("gulp");
var iconfont = require('gulp-iconfont');
var fontName = 'prismic-website';
var runTimestamp = Math.round(Date.now()/1000);

gulp.task('fonts', function(){
  gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: fontName,
      prependUnicode: true,
      formats: ['ttf', 'eot', 'woff','svg'],
      timestamp: runTimestamp
    }))
      .on('glyphs', function(glyphs, options) {
        // CSS templating, e.g.
        console.log(glyphs, options);
      })
    .pipe(gulp.dest('fonts/'));
});
