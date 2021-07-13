#!/usr/bin/env node
import path from 'path'
import {
  checkDirectory,
  checkWriteable,
  copyTemplate,
  createHardhatConfig,
  createPackageJson,
  installDependencies,
  promptFinish,
  tryGitInit,
} from './actions'
import { Command } from 'commander'
import packageJson from '../package.json'
import chalk from 'chalk'

let projectPath: string = '.'

new Command()
  .version(packageJson.version)
  .arguments('<project-directory>')
  .usage(`${chalk.green('<project-directory>')}`)
  .action((projectPath_: string) => {
    projectPath = projectPath_
  })
  .allowUnknownOption()
  .parse(process.argv)

async function createApp() {
  const root = path.resolve(projectPath)
  const dappName = path.basename(root)

  await checkWriteable(root)
  await checkDirectory(root, dappName)

  process.chdir(root)

  createPackageJson(root, dappName)
  await installDependencies(root)
  await copyTemplate(root)
  createHardhatConfig(root)

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
