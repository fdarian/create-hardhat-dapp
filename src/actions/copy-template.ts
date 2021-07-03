import cpy from 'cpy'
import path from 'path'

async function copyTemplate(root: string) {
  await cpy('**', root, {
    parents: true,
    cwd: path.join(__dirname, 'templates', 'default'),
    rename: (name) => {
      switch (name) {
        case 'gitignore':
        case 'env.example': {
          return '.'.concat(name)
        }
        default: {
          return name
        }
      }
    },
  })
}

export default copyTemplate
