import * as R from 'ramda'

function getSearchParam(name, uri) {
  const url = new URL(uri)
  const code = url.searchParams.get(name)
  return code
}

export default R.curryN(2, getSearchParam)
