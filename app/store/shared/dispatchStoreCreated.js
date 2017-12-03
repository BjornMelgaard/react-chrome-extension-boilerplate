import { storeCreated } from '~/app/actions/app'

function dispatchStoreCreated(store) {
  store.dispatch(storeCreated())
}

export default dispatchStoreCreated
