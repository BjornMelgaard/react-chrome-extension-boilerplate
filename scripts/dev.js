require('shelljs/global')

// exec('webpack-dev-server --open --config webpack/dev.config.js')
exec('NODE_ENV="development" webpack --config webpack/webpack.config.babel.js --progress --profile --colors --watch --display-error-details')
