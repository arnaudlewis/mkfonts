var gulp = require("gulp");
var iconfont = require('gulp-iconfont');
var fontName = 'dreamact';

gulp.task('fonts', function(){
  gulp.src(['icons/*.svg'])
    .pipe(iconfont({
      fontName: fontName,
      appendCodepoints: true,
      normalize: true,
      svg: true
    }))
      .on('codepoints', function(codepoints, options) {
        console.log(codepoints, options);
      })
    .pipe(gulp.dest('fonts/'));
});
