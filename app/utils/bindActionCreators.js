import * as R from 'ramda'
import { bindActionCreators } from 'redux'

export default R.curryN(2, bindActionCreators)
