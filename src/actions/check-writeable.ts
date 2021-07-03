import fs from 'fs'
import path from 'path'

async function checkWriteable(root: string) {
  let writeable = false
  try {
    const directory = path.dirname(root)
    await fs.promises.access(directory, (fs.constants || fs).W_OK)
    writeable = true
  } catch {}

  if (!writeable) {
    console.error(
      'The project path is not writable, please check folder permissions and try again.'
    )
    process.exit(1)
  }
}

export default checkWriteable
