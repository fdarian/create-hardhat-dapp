import { ChainId } from './chains'

export const SUPPORTED_PROVIDERS = ['alchemy', 'infura']
export type Provider = typeof SUPPORTED_PROVIDERS[number]

export const PROVIDER_URLS = {
  alchemy: {
    [ChainId.Mainnet]: 'https://eth-mainnet.alchemyapi.io/v2',
    [ChainId.Goerli]: 'https://eth-goerli.alchemyapi.io/v2',
    [ChainId.Rinkeby]: 'https://eth-rinkeby.alchemyapi.io/v2',
    [ChainId.Kovan]: 'https://eth-kovan.alchemyapi.io/v2',
    [ChainId.Ropsten]: 'https://eth-ropsten.alchemyapi.io/v2',
    [ChainId.Polygon]: 'https://polygon-mainnet.g.alchemy.com/v2',
    [ChainId.Mumbai]: 'https://polygon-mumbai.g.alchemy.com/v2',
  },
  infura: {
    [ChainId.Mainnet]: 'https://mainnet.infura.io/v3',
    [ChainId.Goerli]: 'https://goerli.infura.io/v3',
    [ChainId.Rinkeby]: 'https://rinkeby.infura.io/v3',
    [ChainId.Kovan]: 'https://kovan.infura.io/v3',
    [ChainId.Ropsten]: 'https://ropsten.infura.io/v3',
    [ChainId.Polygon]: 'https://polygon-mainnet.infura.io/v3',
    [ChainId.Mumbai]: 'https://polygon-mumbai.infura.io/v3',
  },
} as const
