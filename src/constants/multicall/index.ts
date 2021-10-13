import { ChainId } from 'pancakes-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0xd91337EF4Dc8bdfD277040B5d0d171B1C68Ed256', // TODO
  [ChainId.BSCTESTNET]: '0xd91337EF4Dc8bdfD277040B5d0d171B1C68Ed256'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
