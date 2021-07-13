function parseNetworkProvider(
  input?: string | boolean
): undefined | 'alchemy' | 'infura' {
  if (!input) {
    return undefined
  }

  if (typeof input === 'boolean') {
    return 'alchemy'
  }

  switch (input.toLowerCase().trim()) {
    case 'alchemy':
      return 'alchemy'
    case 'infura':
      return 'infura'
  }

  throw new Error('Unknown network provider')
}

export default parseNetworkProvider
