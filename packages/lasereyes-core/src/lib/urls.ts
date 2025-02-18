import {
  FRACTAL_MAINNET,
  FRACTAL_TESTNET,
  SIGNET,
  TESTNET,
  TESTNET4,
} from '../types/network'
import { NetworkType } from '../types'

export const MEMPOOL_SPACE_URL = 'https://mempool.space'
export const MEMPOOL_SPACE_TESTNET_URL = 'https://mempool.space/testnet'
export const MEMPOOL_SPACE_TESTNET4_URL = 'https://mempool.space/testnet4'
export const MEMPOOL_SPACE_SIGNET_URL = 'https://mempool.space/signet'
export const MEMPOOL_SPACE_FRACTAL_MAINNET_URL =
  'https://mempool.fractalbitcoin.io'
export const MEMPOOL_SPACE_FRACTAL_TESTNET_URL =
  'https://mempool-testnet.fractalbitcoin.io'

export const getMempoolSpaceUrl = (network: NetworkType) =>
  network === TESTNET
    ? MEMPOOL_SPACE_TESTNET_URL
    : network === TESTNET4
      ? MEMPOOL_SPACE_TESTNET4_URL
      : network === SIGNET
        ? MEMPOOL_SPACE_SIGNET_URL
        : network === FRACTAL_MAINNET
          ? MEMPOOL_SPACE_FRACTAL_MAINNET_URL
          : network === FRACTAL_TESTNET
            ? MEMPOOL_SPACE_FRACTAL_TESTNET_URL
            : MEMPOOL_SPACE_URL
