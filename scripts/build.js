require('shelljs/global')

exec('NODE_ENV="production" webpack --config webpack/webpack.config.babel.js --progress --profile --colors --display-error-details')
