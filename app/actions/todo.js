import { createActionCreator } from '~/app/utils'
import * as type from '~/app/constants/todo'

export const addTodo = text => createActionCreator(type.ADD_TODO)
export const deleteTodo = text => createActionCreator(type.DELETE_TODO)
