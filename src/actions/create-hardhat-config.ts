import fs from 'fs'
import generateHardhatConfig, {
  HardhatConfigOptions,
} from '../helpers/generate-hardhat-config'

function createHardhatConfig(root: string, opts?: HardhatConfigOptions) {
  const hardhatConfigFile = generateHardhatConfig(opts)

  fs.writeFileSync(root + '/hardhat.config.ts', hardhatConfigFile)
}

export default createHardhatConfig
