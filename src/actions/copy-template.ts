import cpy from 'cpy'
import path from 'path'
import fs from 'fs'

async function copyTemplate(root: string) {
  await cpy('**', root, {
    parents: true,
    cwd: path.join(__dirname, 'templates', 'default'),
    rename: (name) => {
      switch (name) {
        case 'gitignore':
        case 'yarnrc.yml':
        case 'prettierrc': {
          return '.'.concat(name)
        }
        default: {
          return name
        }
      }
    },
  })

  fs.renameSync(`${root}/yarn`, `${root}/.yarn`)
}

export default copyTemplate
