import { AXIOS_CONFIG } from '@/config'
import { Axioser } from '../axioser'

class DefaultAxioser extends Axioser {
  requestUseFulfilled() {}
  requestUseRejected() {}
  responseUseFulfilled() {}
  responseUseRejected() {}
}

export default new DefaultAxioser(AXIOS_CONFIG.default)
