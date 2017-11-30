import gulp from 'gulp'
import gulpCopy from 'gulp-copy'
import del from 'del'
import concat from 'gulp-concat'
import rollup from 'gulp-better-rollup'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

gulp.task('clean', del.bind(null, ['dist']))

gulp.task('watch', ['clean', 'build'], () => {
  gulp.watch('src/**/*', ['build'])
})

gulp.task('notPopupJs', function() {
  const notPopup = ['src/oauth2/*', 'src/popup/index.html', 'src/*']
  return gulp.src(notPopup).pipe(gulpCopy('dist', { prefix: 1 }))
})

gulp.task('popupJs', () =>
  gulp
    .src('src/popup/index.js')
    .pipe(
      rollup(
        {
          plugins: [
            babel({
              presets: [
                [
                  'env',
                  {
                    modules: false,
                  },
                ],
              ],
              plugins: ['external-helpers'],
              babelrc: false,
            }),
            resolve(),
          ],
        },
        {
          format: 'iife',
        }
      )
    )
    .pipe(gulp.dest('dist/popup'))
)

gulp.task('build', ['notPopupJs', 'popupJs'])

gulp.task('default', ['clean', 'build'])
