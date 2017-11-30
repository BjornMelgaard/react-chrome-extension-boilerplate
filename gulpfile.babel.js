import gulp from 'gulp'
import copy from 'gulp-copy'
import sass from 'gulp-sass'
import del from 'del'
import runSequence from 'run-sequence'
import tildeImporter from 'node-sass-tilde-importer'

// rollup
import rollup from 'gulp-better-rollup'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

const createRunSequence = (...args) => cb => runSequence(...args, cb)

gulp.task('clean', del.bind(null, ['dist']))

gulp.task('sass', () =>
  gulp
    .src('src/popup/styles/**/*.scss')
    .pipe(
      sass({
        importer: tildeImporter,
        // outputStyle: 'compressed',
      }).on('error', sass.logError)
    )
    .pipe(gulp.dest('dist/popup'))
)

gulp.task('watch', ['default'], () => {
  gulp.watch('src/**/*', ['default']).on('error', err => {
    console.log(err.toString())
  })

  gulp.watch('src/popup/styles/**/*.scss', ['sass'])
})

gulp.task('notPopupJs', function() {
  const notPopup = ['src/oauth2/**/*', 'src/popup/index.html', 'src/*']
  return gulp.src(notPopup).pipe(copy('dist', { prefix: 1 }))
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
                    targets: {
                      browsers: ['last 2 Chrome versions'],
                    },
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

gulp.task('build', createRunSequence(['notPopupJs', 'popupJs']))

gulp.task('default', ['clean'], createRunSequence(['build', 'sass']))
