import chalk from 'chalk'
import { install } from '../helpers'

const devDependencies = [
  'hardhat',

  // Hardhat - ethers
  'ethers',
  '@nomiclabs/hardhat-ethers',

  // Hardhat - test
  'chai',
  '@nomiclabs/hardhat-waffle',
  'ethereum-waffle',
  '@types/chai',
  '@types/mocha',

  // Hardhat - plugin
  'hardhat-gas-reporter',
  '@nomiclabs/hardhat-etherscan',

  // Typechain
  'typechain',
  '@typechain/ethers-v5',
  '@typechain/hardhat',

  // Typescript
  'typescript',
  'ts-node',
  '@types/node',

  // Utils
  'dotenv',
]

async function installDependencies(root: string) {
  // Log
  console.log()
  console.log('Installing devDependencies:')
  for (const devDependency of devDependencies) {
    console.log(`- ${chalk.cyan(devDependency)}`)
  }
  console.log()

  //
  await install(root, devDependencies, true)
}

export default installDependencies
