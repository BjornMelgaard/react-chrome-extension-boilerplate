require('shelljs/global')

exec('NODE_ENV="development" webpack-dev-server --color --progress --config webpack/webpack.config.babel.js')
