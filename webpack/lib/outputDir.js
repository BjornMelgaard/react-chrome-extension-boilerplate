import { join } from 'path'
import root from './root'
import env from './env'

const outputDir = join(root, env('dev', 'build'))

export default outputDir
