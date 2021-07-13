import { execSync } from 'child_process'

function tryPrettierWrite(root: string) {
  execSync(
    `yarn prettier --write ${root}/hardhat.config.ts ${root}/scripts ${root}/test ${root}/contracts`,
    { stdio: 'ignore' }
  )
}

export default tryPrettierWrite
