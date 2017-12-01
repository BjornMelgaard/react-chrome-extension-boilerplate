require('shelljs/global')

exec('NODE_ENV="production" webpack --config webpack/prod.config.js --progress --profile --colors')
