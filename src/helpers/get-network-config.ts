import { HardhatUserConfig } from 'hardhat/types'
import { CHAIN_NAMES } from '../constants/chains'
import { Provider, PROVIDER_URL } from '../constants/provider'

function getNetworkConfig(provider: Provider): HardhatUserConfig {
  const providerUrls = PROVIDER_URL[provider]

  const networks = {}
  for (const chainId in providerUrls) {
    const chainName = CHAIN_NAMES[chainId].toLowerCase()
    const url = providerUrls[chainId]

    networks[chainName] = {
      url: `<#\`${url}/\${PROVIDER_API}\`#>`,
      accounts: '<#[PRIVATE_KEY]#>',
    }
  }

  return {
    networks: {
      ...networks,
    },
  }
}

export default getNetworkConfig
