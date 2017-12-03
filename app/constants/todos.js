import { constantCreator } from '~/app/utils'

const scopedConst = constantCreator('TODO')

export const ADD_TODO = scopedConst('ADD_TODO')
export const DELETE_TODO = scopedConst('DELETE_TODO')
