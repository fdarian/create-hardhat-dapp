/* eslint-disable import/no-extraneous-dependencies */
import spawn from 'cross-spawn'

function install(
  rootPath: string,
  dependencies: string[],
  devDependencies: boolean
): Promise<void> {
  return new Promise((resolve, reject) => {
    let args: string[]

    args = ['add', '--exact']
    args.push('--cwd', rootPath)
    if (devDependencies) args.push('--dev')
    args.push(...dependencies)

    const child = spawn('yarn', args, {
      stdio: 'inherit',
      env: { ...process.env, ADBLOCK: '1', DISABLE_OPENCOLLECTIVE: '1' },
    })

    child.on('close', (code) => {
      if (code !== 0) {
        reject({ command: `yarn ${args.join(' ')}` })
        return
      }

      resolve()
    })
  })
}

export default install
