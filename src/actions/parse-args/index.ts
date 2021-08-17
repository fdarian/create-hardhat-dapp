import parseProvider from './parse-provider'

function parseArgs(args: any) {
  const provider = parseProvider(args.provider)

  return { ...args, provider }
}

export default parseArgs
