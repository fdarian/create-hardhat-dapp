import chalk from 'chalk'
import path from 'path'

function promptFinish(root: string, dappName: string) {
  console.log(
    `${chalk.green('Success!')} Created ${dappName} at ${path.dirname(root)}`
  )
  console.log('Inside that directory, you can run several commands:')
  console.log()
  console.log(chalk.cyan(`  yarn recompile`))
  console.log('    Cleans build directory and compile smart contracts.')
  console.log()
  console.log(chalk.cyan(`  yarn chain`))
  console.log('    Starts hardhat local blockchain.')
  console.log()
  console.log(chalk.cyan(`  yarn test`))
  console.log('    Runs all tests on smart contracts.')
  console.log()
}

export default promptFinish
