const { build } = require('esbuild')

build({
  entryPoints: ['./src/index.ts'],
  outfile: './dist/index.js',
  minify: true,
  bundle: true,
  platform: 'node',
}).catch(() => process.exit(1))
