import '@nomiclabs/hardhat-waffle'
import '@typechain/hardhat'
import 'hardhat-gas-reporter'
import { HardhatUserConfig, task } from 'hardhat/config'

require('dotenv').config()

const REPORT_GAS = process.env.REPORT_GAS || ''
const COINMARKETCAP_API = process.env.REPORT_GAS || ''

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (args, hre) => {
  const accounts = await hre.ethers.getSigners()

  for (const account of accounts) {
    console.log(account.address)
  }
})

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
  gasReporter: {
    enabled: REPORT_GAS.toLowerCase() === 'true' ? true : false,
    currency: 'USD',
    coinmarketcap: COINMARKETCAP_API,
  },
}

export default config
