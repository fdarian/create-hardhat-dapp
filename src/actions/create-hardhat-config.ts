import fs from 'fs'
import path from 'path'
import generateHardhatConfig, {
  HardhatConfigOptions,
} from '../helpers/generate-hardhat-config'

function createHardhatConfig(root: string, opts?: HardhatConfigOptions) {
  const hardhatConfigFile = generateHardhatConfig(opts)

  fs.writeFileSync(path.join(root, 'hardhat.config.ts'), hardhatConfigFile)
}

export default createHardhatConfig
