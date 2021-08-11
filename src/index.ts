#!/usr/bin/env node
import path from 'path'
import {
  checkDirectory,
  checkWriteable,
  copyTemplate,
  createEnv,
  createHardhatConfig,
  createPackageJson,
  installDependencies,
  promptFinish,
  tryGitInit,
  tryPrettierWrite,
} from './actions'
import { Command } from 'commander'
import packageJson from '../package.json'
import chalk from 'chalk'
import { parseNetworkProvider } from './helpers'
import parseArgs from './actions/parse-args'

let projectPath: string = '.'

const program = new Command()
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')}`)
  .action((projectPath_: string) => {
    projectPath = projectPath_
  })
  .option(
    '-p, --provider [name]',
    `

  Prepare network configurations for connecting to
  known external network using your favorite JSON-RPC provider

  Fill with 'alchemy' or 'infura' (case insensitive)
`
  )
  .option('--no-install', 'Prevent installing dependencies at beginning')
  .parse(process.argv)

async function createApp() {
  const { provider, install } = parseArgs(program.opts())

  const root = path.resolve(projectPath)
  const dappName = path.basename(root)

  await checkWriteable(root)
  await checkDirectory(root, dappName)

  process.chdir(root)

  createPackageJson(root, dappName)

  if (install) {
    await installDependencies(root)
  }

  await copyTemplate(root)
  createHardhatConfig(root, {
    provider: parseNetworkProvider(provider),
  })

  createEnv(root, provider)

  tryPrettierWrite(root)
  tryGitInit(root)

  promptFinish(root, dappName)
}

createApp()
  .then()
  .catch(async (reason) => {
    console.log()
    console.log('Aborting installation.')
    if (reason.command) {
      console.log(`  ${chalk.cyan(reason.command)} has failed.`)
    } else {
      console.log(chalk.red('Unexpected error. Please report it as a bug:'))
      console.log(reason)
    }
    console.log()

    process.exit(1)
  })
