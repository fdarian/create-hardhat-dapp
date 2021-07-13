import fs from 'fs'
import os from 'os'
import path from 'path'

function createPackageJson(root: string, dappName: string) {
  const packageJson = {
    name: dappName,
    version: '0.1.0',
    scripts: {
      recompile: 'hardhat clean && hardhat compile',
      chain: 'hardhat node',
      console: 'hardhat console',
      test: 'hardhat test',
      verify: 'hardhat verify',
    },
  }

  fs.writeFileSync(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2) + os.EOL
  )
}

export default createPackageJson
