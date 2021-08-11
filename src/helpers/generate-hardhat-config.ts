import { HardhatUserConfig } from 'hardhat/config'
import { EthGasReporterConfig } from 'hardhat-gas-reporter/src/types'
import removeTemplateQuotes from './remove-template-quotes'
import getNetworkConfig from './get-network-config'
import { Provider } from '../constants/provider'

declare module 'hardhat/types/config' {
  interface HardhatUserConfig {
    gasReporter?: Partial<EthGasReporterConfig>
  }
}

export interface HardhatConfigOptions {
  reportGas?: boolean
  etherscan?: boolean
  provider?: null | Provider
}

function generateHardhatConfig(opts?: HardhatConfigOptions) {
  const etherscan = opts?.etherscan ?? true //
  const etherscanConfig = etherscan && {
    etherscan: {
      apiKey: '<#process.env.ETHERSCAN_API#>',
    },
  }

  const reportGas = opts?.reportGas ?? true
  const gasReporterConfig = reportGas && {
    // @ts-ignore
    gasReporter: {
      enabled:
        "<#process.env.REPORT_GAS?.toLowerCase() === 'true' ? true : false#>",
      currency: 'USD',
      coinmarketcap: '<#process.env.COINMARKETCAP_API#>',
    } as EthGasReporterConfig,
  }

  const config: HardhatUserConfig = {
    solidity: {
      version: '0.8.4',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
    ...gasReporterConfig,
    ...etherscanConfig,
    ...(opts?.provider && getNetworkConfig(opts?.provider)),
  }

  return `
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
${etherscan ? "import '@nomiclabs/hardhat-etherscan'" : ''}
${reportGas ? "import 'hardhat-gas-reporter'" : ''}
import { HardhatUserConfig, task } from 'hardhat/config'

require('dotenv').config()
${
  opts?.provider
    ? `
const PRIVATE_KEY = process.env.PRIVATE_KEY || ''
const PROVIDER_API = process.env.PROVIDER_API || ''
`
    : ''
}

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

const config: HardhatUserConfig = ${removeTemplateQuotes(
    JSON.stringify(config)
  )}

export default config
`
}

export default generateHardhatConfig
