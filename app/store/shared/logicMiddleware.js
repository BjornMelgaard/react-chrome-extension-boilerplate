import logics from '~/app/logics'
import { createLogicMiddleware } from 'redux-logic'

const logicMiddleware = createLogicMiddleware(logics)

export default logicMiddleware
