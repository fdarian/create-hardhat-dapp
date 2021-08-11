import { Provider, SUPPORTED_PROVIDERS } from '../../constants/providers'

function throwError(inProvider: any) {
  const supportedProviders = SUPPORTED_PROVIDERS.join("', '")
  throw new Error(
    `Unknown provider, received '${inProvider}' while expecting '${supportedProviders}'`
  )
}

function parseProvider(inProvider: any): Provider | null {
  if (!inProvider) {
    return null
  }

  if (inProvider === true) {
    return 'alchemy'
  }

  if (typeof inProvider !== 'string') {
    throwError(inProvider)
  }

  const strProvider = (inProvider as string).trim().toLowerCase()
  if (!SUPPORTED_PROVIDERS.includes(strProvider)) {
    throwError(inProvider)
  }

  return strProvider as Provider
}

export default parseProvider
