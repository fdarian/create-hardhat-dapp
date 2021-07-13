import { HardhatUserConfig } from 'hardhat/types'

const alchemyBaseUrl = {
  mainnet: 'https://eth-mainnet.alchemyapi.io/v2',
  goerli: 'https://eth-goerli.alchemyapi.io/v2',
  rinkeby: 'https://eth-rinkeby.alchemyapi.io/v2',
}

const infuraBaseUrl = {
  mainnet: 'https://mainnet.infura.io/v3',
  goerli: 'https://goerli.infura.io/v3',
  rinkeby: 'https://rinkeby.infura.io/v3',
}

function getNetworkConfig(provider: 'alchemy' | 'infura'): HardhatUserConfig {
  const alchemy = provider === 'alchemy'

  return {
    networks: {
      mainnet: {
        url:
          '|<-r|`' +
          (alchemy ? alchemyBaseUrl.mainnet : infuraBaseUrl.mainnet) +
          '${PROVIDER_API}`|r->|',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      goerli: {
        url:
          '|<-r|`' +
          (alchemy ? alchemyBaseUrl.goerli : infuraBaseUrl.goerli) +
          '${PROVIDER_API}`|r->|',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      rinkeby: {
        url:
          '|<-r|`' +
          (alchemy ? alchemyBaseUrl.rinkeby : infuraBaseUrl.rinkeby) +
          '${PROVIDER_API}`|r->|',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      matic: {
        url: 'https://rpc-mainnet.matic.network',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      mumbai: {
        url: 'https://rpc-mainnet.matic.network',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      'smart-chain': {
        url: 'https://bsc-dataseed.binance.org',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
      'smart-chain-test': {
        url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        // @ts-ignore
        accounts: '|<-r|[PRIVATE_KEY]|r->|',
      },
    },
  }
}

export default getNetworkConfig
