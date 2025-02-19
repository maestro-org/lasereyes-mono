import { Source } from './source'
import { NetworkType } from '../../types'

class MaestroSource implements Source {
  // Create Maestro account+project: https://dashboard.gomaestro.org/
  constructor(network: NetworkType, apiKey: string) {}

  getTransactionInfo(id: string): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/transaction-info
    return Promise.resolve(null)
  }

  getRawTransaction(id: string): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/km0w-transaction-info
    return Promise.resolve(null)
  }

  getRecommendedFees(): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/estimate-fee
    // TODO: Implement recommended fees endpoint on the Maestro side
    return Promise.resolve(null)
  }

  getOrdAddress(address: string): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/activity-by-inscription
    // Can sort by `order`. The first result will indicate where the inscription is
    return Promise.resolve(null)
  }

  getRuneById(id: string): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/runes-info
    return Promise.resolve(null)
  }

  getRuneByName(name: string): Promise<any> {
    // TODO: https://docs.gomaestro.org/bitcoin/runes-info
    // works with both ID and name
    return Promise.resolve(null)
  }
}
