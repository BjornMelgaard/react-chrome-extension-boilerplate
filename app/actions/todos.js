import { createActionCreator } from '~/app/utils'
import * as type from '~/app/constants/todos'

export const addTodo = createActionCreator(type.ADD_TODO)
export const deleteTodo = createActionCreator(type.DELETE_TODO)
