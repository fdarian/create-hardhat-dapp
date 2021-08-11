import parseProvider from './parse-provider'

function parseArgs(args: any) {
  const provider = parseProvider(args.provider)

  return { provider, ...args }
}

export default parseArgs
