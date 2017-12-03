import { createActionCreator } from '~/app/utils'
import * as type from '~/app/constants/app'

export const storeCreated = createActionCreator(type.STORE_CREATED)
