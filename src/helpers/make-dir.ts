import fs from 'fs'

function makeDir(
  root: string,
  options = { recursive: true }
): Promise<string | undefined> {
  return fs.promises.mkdir(root, options)
}

export default makeDir
