import { join } from 'path'
import { env, root } from './lib'

const path = join(root, `./.env.${env('dev', 'prod')}`)

require('dotenv').config({ path })
