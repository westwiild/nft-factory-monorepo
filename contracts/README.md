# Smart Contracts

This directory contains the smart contracts for the NFT Factory project, built with Solidity and Foundry.

## 📁 Project Structure

```
contracts/
├── src/           # Source files
├── test/          # Test files
├── script/        # Deployment scripts
└── lib/           # Dependencies
```

## 🚀 Quick Start

### Prerequisites

- [Foundry](https://book.getfoundry.sh/getting-started/installation)
- [Node.js](https://nodejs.org/) (v18 or higher)
- [Yarn](https://yarnpkg.com/) package manager

### Installation

```bash
forge install
```

## 🛠️ Development

### Compilation

```bash
make build
```

### Testing

Run all tests:

```bash
make test
```

### Coverage

Generate coverage report:

```bash
make coverage-html
```

### Deployment

Deploy to a sepolia:

```bash
make deploy-sepolia
```

## 📝 Contract Architecture

The main contracts in this project are:

| Contract             | Description                                    |
| -------------------- | ---------------------------------------------- |
| `NFTProxyFactory`    | Factory contract for deploying NFT collections |
| `NFTImplementation`  | Implementation contract for NFT collections    |
| `INFTImplementation` | Interface for NFT implementation               |

## 🔒 Security

This project uses:

- [Slither](https://github.com/crytic/slither) for static analysis
- [Foundry](https://book.getfoundry.sh/) for testing and deployment
- [OpenZeppelin](https://www.openzeppelin.com/contracts) contracts for standard implementations

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## Environment Variables

PRIVATE_KEY=your_private_key

RPC_URL=https://ethereum-sepolia-rpc.publicnode.com

SEPOLIA_API_URL=https://api-sepolia.etherscan.io/api

SEPOLIA_API_KEY=your_etherscan_api_key
