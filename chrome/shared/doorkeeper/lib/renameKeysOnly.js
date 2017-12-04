import * as R from 'ramda'
import * as RA from 'ramda-adjunct'

const renameKeysOnly = spec => R.pipe(R.pick(R.keys(spec)), RA.renameKeys(spec))

export default renameKeysOnly
