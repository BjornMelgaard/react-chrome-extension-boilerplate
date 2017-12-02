export default function createReducer(declaration, initialValue) {
  return function reducerFn(state = initialValue, action) {
    const reducer = declaration[action.type]

    return reducer ? reducer(state, action.payload, action) : state
  }
}
