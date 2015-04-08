var gulp = require("gulp");
var iconfont = require('gulp-iconfont');
var fontName = 'startkit';

gulp.task('fonts', function(){
  gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: fontName,
      appendCodepoints: true,
      normalize: true
    }))
      .on('codepoints', function(codepoints, options) {
        console.log(codepoints, options);
      })
    .pipe(gulp.dest('fonts/'));
});
