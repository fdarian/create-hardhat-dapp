import fs from 'fs'
import isFolderEmpty from './is-folder-empty'

async function checkDirectory(root: string, dappName: string) {
  await fs.promises.mkdir(root, { recursive: true })

  if (!isFolderEmpty(root, dappName)) {
    process.exit(1)
  }
}

export default checkDirectory
