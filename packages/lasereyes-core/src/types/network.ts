import { BitcoinNetworkType } from '@orangecrypto/orange-connect'

export enum BaseNetwork {
  MAINNET = 'mainnet',
  SIGNET = 'signet',
  TESTNET = 'testnet',
  TESTNET4 = 'testnet4',
  REGTEST = 'regtest',
}

export enum FractalNetwork {
  MAINNET = 'fractal_mainnet',
  TESTNET = 'fractal_testnet',
}

export enum CmdruidNetwork {
  MAINNET = 'main',
  TESTNET = 'testnet',
  SIGNET = 'signet',
}

export enum LeatherNetwork {
  MAINNET = 'mainnet',
  TESTNET = 'testnet',
}

export enum UnisatNetwork {
  MAINNET = 'BITCOIN_MAINNET',
  TESTNET = 'BITCOIN_TESTNET',
  TESTNET4 = 'BITCOIN_TESTNET4',
  SIGNET = 'BITCOIN_SIGNET',
  FRACTAL_MAINNET = 'FRACTAL_BITCOIN_MAINNET',
  FRACTAL_TESTNET = 'FRACTAL_BITCOIN_TESTNET',
}

export enum OpNetwork {
  MAINNET = 'livenet',
  TESTNET = 'testnet',
}

export enum XverseNetwork {
  MAINNET = 'Mainnet',
  TESTNET = 'Testnet',
  SIGNET = 'Signet',
  FRACTAL_MAINNET = 'fractal mainnet',
  FRACTAL_TESTNET = 'fractal testnet',
}

export enum OkxNetwork {
  MAINNET = 'livenet',
  TESTNET = 'testnet',
}

export enum WizzNetwork {
  MAINNET = 'livenet',
  TESTNET = 'testnet',
  TESTNET4 = 'testnet4',
  SIGNET = 'signet',
}

export enum OrangeNetwork {
  MAINNET = 'Mainnet',
  TESTNET = 'Testnet',
}

export const getSatsConnectNetwork = (network: string) => {
  if (network === BaseNetwork.MAINNET) return XverseNetwork.MAINNET
  if (network === BaseNetwork.TESTNET) return XverseNetwork.TESTNET
  if (network === BaseNetwork.TESTNET4) return XverseNetwork.TESTNET
  if (network === BaseNetwork.SIGNET) return XverseNetwork.SIGNET
  if (network === FractalNetwork.MAINNET) return XverseNetwork.MAINNET
  if (network === FractalNetwork.MAINNET) return XverseNetwork.TESTNET
  return XverseNetwork.MAINNET
}

export const getLeatherNetwork = (network: string) => {
  if (network === BaseNetwork.MAINNET) return LeatherNetwork.MAINNET
  if (network === BaseNetwork.TESTNET) return LeatherNetwork.TESTNET
  return LeatherNetwork.MAINNET
}

export const getUnisatNetwork = (network: string) => {
  if (network === BaseNetwork.MAINNET) return UnisatNetwork.MAINNET
  if (network === BaseNetwork.TESTNET) return UnisatNetwork.TESTNET
  if (network === BaseNetwork.TESTNET4) return UnisatNetwork.TESTNET4
  if (network === BaseNetwork.SIGNET) return UnisatNetwork.SIGNET
  if (network === FractalNetwork.MAINNET) return FractalNetwork.MAINNET
  if (network === FractalNetwork.TESTNET) return FractalNetwork.TESTNET
  return UnisatNetwork.MAINNET
}

export const getWizzNetwork = (network: string) => {
  if (network === BaseNetwork.MAINNET) return WizzNetwork.MAINNET
  if (network === BaseNetwork.TESTNET) return WizzNetwork.TESTNET
  if (network === BaseNetwork.TESTNET4) return WizzNetwork.TESTNET4
  if (network === BaseNetwork.SIGNET) return WizzNetwork.SIGNET
  if (network === FractalNetwork.TESTNET) return WizzNetwork.TESTNET
  if (network === FractalNetwork.MAINNET) return WizzNetwork.MAINNET
  return WizzNetwork.MAINNET
}

export const getOrangeNetwork = (network: string): BitcoinNetworkType => {
  if (network === BaseNetwork.MAINNET)
    return OrangeNetwork.MAINNET as unknown as BitcoinNetworkType
  if (network === BaseNetwork.TESTNET)
    return OrangeNetwork.TESTNET as unknown as BitcoinNetworkType
  if (network === BaseNetwork.TESTNET4)
    return OrangeNetwork.TESTNET as unknown as BitcoinNetworkType
  if (network === BaseNetwork.SIGNET)
    return OrangeNetwork.TESTNET as unknown as BitcoinNetworkType
  if (network === FractalNetwork.MAINNET)
    return OrangeNetwork.MAINNET as unknown as BitcoinNetworkType
  if (network === FractalNetwork.TESTNET)
    return OrangeNetwork.MAINNET as unknown as BitcoinNetworkType
  return OrangeNetwork.MAINNET as unknown as BitcoinNetworkType
}

export const getCmDruidNetwork = (network: string) => {
  if (network === BaseNetwork.MAINNET) return CmdruidNetwork.MAINNET
  if (network === BaseNetwork.TESTNET4) return CmdruidNetwork.TESTNET
  if (network === BaseNetwork.TESTNET) return CmdruidNetwork.TESTNET
  if (network === BaseNetwork.SIGNET) return CmdruidNetwork.SIGNET
  if (network === FractalNetwork.MAINNET) return CmdruidNetwork.MAINNET
  if (network === FractalNetwork.TESTNET) return CmdruidNetwork.TESTNET
  return CmdruidNetwork.MAINNET
}

export const getNetworkForUnisat = (network: string) => {
  if (network === UnisatNetwork.MAINNET) return BaseNetwork.MAINNET
  if (network === UnisatNetwork.TESTNET) return BaseNetwork.TESTNET
  if (network === UnisatNetwork.TESTNET4) return BaseNetwork.TESTNET4
  if (network === UnisatNetwork.SIGNET) return BaseNetwork.SIGNET
  if (network === UnisatNetwork.FRACTAL_MAINNET) return FractalNetwork.MAINNET
  if (network === UnisatNetwork.FRACTAL_TESTNET) return FractalNetwork.TESTNET
  return BaseNetwork.MAINNET
}

export const getNetworkForXverse = (network: string) => {
  if (network === XverseNetwork.MAINNET) return BaseNetwork.MAINNET
  if (network === XverseNetwork.TESTNET) return BaseNetwork.TESTNET
  return BaseNetwork.MAINNET
}

export const getNetworkForLeather = (network: string) => {
  if (network === LeatherNetwork.MAINNET) return BaseNetwork.MAINNET
  if (network === LeatherNetwork.TESTNET) return BaseNetwork.TESTNET
  return BaseNetwork.MAINNET
}

export const getNetworkForOkx = (network: string) => {
  if (network === OkxNetwork.MAINNET) return BaseNetwork.MAINNET
  if (network === OkxNetwork.TESTNET) return BaseNetwork.TESTNET
  return BaseNetwork.MAINNET
}

export const getNetworkForWizz = (network: string) => {
  if (network === WizzNetwork.MAINNET) return BaseNetwork.MAINNET
  if (network === WizzNetwork.TESTNET) return BaseNetwork.TESTNET
  if (network === WizzNetwork.TESTNET4) return BaseNetwork.TESTNET4
  if (network === WizzNetwork.SIGNET) return BaseNetwork.SIGNET
  if (network === FractalNetwork.TESTNET) return BaseNetwork.TESTNET
  if (network === FractalNetwork.MAINNET) return BaseNetwork.MAINNET
  return BaseNetwork.MAINNET
}
