import { constantCreator } from '~/app/utils'

const scopedConst = constantCreator('APP')

export const STORE_CREATED = scopedConst('STORE_CREATED')
