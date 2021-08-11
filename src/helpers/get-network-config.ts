import { HardhatUserConfig } from 'hardhat/types'
import { Provider } from '../constants/provider'

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

function getNetworkConfig(provider: Provider): HardhatUserConfig {
  const alchemy = provider === 'alchemy'
  const urls = alchemy ? alchemyBaseUrl : infuraBaseUrl

  return {
    networks: {
      mainnet: {
        url: `<#\`${urls.mainnet}/\${PROVIDER_API}\`#>`,
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      goerli: {
        url: `<#\`${urls.goerli}/\${PROVIDER_API}\`#>`,
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      rinkeby: {
        url: `<#\`${urls.rinkeby}/\${PROVIDER_API}\`#>`,
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      matic: {
        url: 'https://rpc-mainnet.matic.network',
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      mumbai: {
        url: 'https://rpc-mainnet.matic.network',
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      'smart-chain': {
        url: 'https://bsc-dataseed.binance.org',
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
      'smart-chain-test': {
        url: 'https://data-seed-prebsc-1-s1.binance.org:8545',
        // @ts-ignore
        accounts: '<#[PRIVATE_KEY]#>',
      },
    },
  }
}

export default getNetworkConfig
