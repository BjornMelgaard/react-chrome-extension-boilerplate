import { doorkeeperConf } from './config'

const doorkeeper = new OAuth2('doorkeeper', doorkeeperConf)

export default doorkeeper
