const currentEnv = process.env.NODE_ENV

function env(whenDev, whenProd) {
  if (currentEnv === 'development') {
    return whenDev
  } else if (currentEnv === 'production') {
    return whenProd
  }
  throw new Error(`unsupported env: ${currentEnv}`)
}

export default env
