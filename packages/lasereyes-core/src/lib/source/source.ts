export interface Source {
  getTransactionInfo(id: string): Promise<any>
  getRawTransaction(id: string): Promise<any>
  getRecommendedFees(): Promise<any>
  getOrdAddress(address: string): Promise<any>
  getRuneById(id: string): Promise<any>
  getRuneByName(name: string): Promise<any>
}
