# 👷‍♂️ Create Hardhat DApp

The fastest way to initialize a new [Hardhat](https://hardhat.org) development environment.

## Features ⚡️

- **Zero Configuration** — No need to install and configure hardhat plugins manually
- **Typescript by Default** — Provides static typing not just for JavaScript but also Smart Contract ABI
- **Extensible** — Still a Hardhat environment that can be extended with many awesome plugins

## Getting Started 📚

Start by running the command below and replace `defi-app` with the name of your project.

```bash
npx create-hardhat-dapp defi-app
```

Or using `yarn`

```bash
yarn create hardhat-dapp defi-app
```

## Options 🪛

`create-hardhat-dapp` comes with the following option:

- **-p, --provider [{ alchemy | infura }]** — Prepare [network configurations](https://hardhat.org/config/#networks-configuration) for connecting to [networks](#network-configurations-) using your favorite JSON-RPC provider. Leave it blank for `alchemy`

- **--no-install** — Prevent installing dependencies at beginning

## What Comes Out of the Box 📦

> Anything marked with `🏷` is optional

### Web3

- **[ethers.js](https://docs.ethers.io)** — JavaScript library to interact with Ethereum
- **[hardhat-ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html)** — Extended version of ethers.js for Hardhat

### Test

- **[waffle](https://hardhat.org/guides/waffle-testing.html)** — Simple smart contract testing library
- **[mocha](https://mochajs.org)** — Feature-rich JavaScript test framework
- **[chai](https://www.chaijs.com)** — Assertion library paired with Mocha

### Hardhat Plugins

> **hardhat-gas-reporter** **optionally** requires an API Key for [coinamrketcap](https://coinmarketcap.com) to fetch price data
>
> **hardhat-etherscan** requires an API Key for [etherscan](https://etherscan.io) to submit smart contract

- **[hardhat-gas-reporter](https://hardhat.org/plugins/hardhat-gas-reporter.html)** — Mocha reporter that generates gas usage
- **[hardhat-etherscan](https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html)** — Smart Contract verification on Etherscan

### Tools / Utilities

> Feel free to customize the `.prettierrc` config file to follow your code style

- **[Typescript](https://www.typescriptlang.org)** — Static Type version of JavaScript
- **[Typechain](https://github.com/ethereum-ts/TypeChain)** — 🔌 TypeScript bindings for Ethereum smart contracts
- **[Prettier](https://prettier.io)** — Automatic code formatter and comes with the [Solidity plugin](https://github.com/prettier-solidity/prettier-plugin-solidity)

### Network Configurations 🏷

> Ethereum networks require an API Key for JSON-RPC Provider either [Alchemy](https://www.alchemy.com) or [Infura](https://infura.io)
> You can generate these configurations using the `-p` or `--provider` command, see [options](#options-)

- **Ethereum** — Mainnet, Görli and Rinkeby
- **Polygon (previously matic)** — Mainnet and Mumbai
- **Smart Chain** — Mainnet and Testnet

## Future 🌅

- [scaffold-eth](https://github.com/austintgriffith/scaffold-eth)-like interface for quickly testing your smart contract
- Intuitive command-line menu prompts
- Ability to opt-out and use `npm` or `JavaScript`
- Initialize with an example template like ERC20 Token, ERC721 NFT, AMM, and Lending Protocol

Feel free to suggest anything 🙏🏻

## License

Farrel Darian (farreldarian) MIT

## Mentions

Some ways and code adopted from [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
