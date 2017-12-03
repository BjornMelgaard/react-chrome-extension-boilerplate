import { createActionCreator } from '~/app/utils'
import * as type from '~/app/constants/todo'

export const addTodo = createActionCreator(type.ADD_TODO)
export const deleteTodo = createActionCreator(type.DELETE_TODO)
