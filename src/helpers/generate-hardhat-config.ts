import { HardhatUserConfig, task } from 'hardhat/config'
import { EthGasReporterConfig } from 'hardhat-gas-reporter/src/types'
import removeTemplateQuotes from './remove-template-quotes'

declare module 'hardhat/types/config' {
  interface HardhatUserConfig {
    gasReporter?: Partial<EthGasReporterConfig>
  }
}

const defaultTask = `
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})
`

export interface HardhatConfigOptions {
  reportGas?: boolean
}

function generateHardhatConfig(opts?: HardhatConfigOptions) {
  const reportGas = opts?.reportGas ?? true
  const gasReporterConfig = reportGas && {
    // @ts-ignore
    gasReporter: {
      enabled:
        "|<-r|process.env.REPORT_GAS?.toLowerCase() === 'true' ? true : false|r->|",
      currency: 'USD',
      coinmarketcap: '|<-r|process.env.COINMARKETCAP_API|r->|',
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
  }

  return `
import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
${reportGas && "import 'hardhat-gas-reporter'"}
import { HardhatUserConfig, task } from 'hardhat/config'

require('dotenv').config()

${defaultTask}

const config: HardhatUserConfig = ${removeTemplateQuotes(
    JSON.stringify(config)
  )}

export default config
`
}

export default generateHardhatConfig
