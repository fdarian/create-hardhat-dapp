import { execSync } from 'child_process'

function tryPrettierWrite(root: string) {
  execSync(
    `yarn prettier --write ${root}/hardhat.config.ts ${root}/package.json`,
    {
      stdio: 'ignore',
    }
  )
}

export default tryPrettierWrite
