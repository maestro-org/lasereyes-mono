import { Source } from './source'

class SandshrewSource implements Source {
  constructor() {}

  getTransactionInfo(id: string): Promise<any> {
    return Promise.resolve(null)
  }

  getRawTransaction(id: string): Promise<any> {
    return Promise.resolve(null)
  }

  getRecommendedFees(): Promise<any> {
    return Promise.resolve(null)
  }

  getOrdAddress(address: string): Promise<any> {
    return Promise.resolve(null)
  }

  getRuneById(id: string): Promise<any> {
    return Promise.resolve(null)
  }

  getRuneByName(name: string): Promise<any> {
    return Promise.resolve(null)
  }
}
