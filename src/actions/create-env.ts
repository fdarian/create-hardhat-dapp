import fs from 'fs'
import path from 'path'

const optional = `
#----------#
# Optional #
#----------#

# Etherscan key, for automatize the verification of the contracts at Etherscan
ETHERSCAN_API=

# Coinmarketcap API Key, for getting the gas price
COINMARKETCAP_API=

# Option to enable gas reporter [true | false] (case insensitive)
REPORT_GAS=
`

const required = `
#----------#
# Required #
#----------#

# Ethereum wallet private key, KEEP IT PRIVATE!
PRIVATE_KEY=

# Alchemy or Infura API Key 
PROVIDER_API=
`

function createEnv(root: string, requiredEnv = false) {
  let env = optional

  if (requiredEnv) {
    env = required + '\n' + env
  }

  fs.writeFileSync(path.join(root, '.env'), env)
}

export default createEnv
