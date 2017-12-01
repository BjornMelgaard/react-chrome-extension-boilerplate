import * as R from 'ramda'
import fromEnv from './fromEnv'

const fromEnvAll = R.reduce(
  (acc, envVarName) => R.assoc(envVarName, fromEnv(envVarName), acc),
  {}
)

export default fromEnvAll
