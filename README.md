# NFT Factory Monorepo

This monorepo contains a complete NFT factory implementation with smart contracts and backend services.

## Project Structure

```
.
├── contracts/     # Solidity smart contracts
├── backend/       # TypeScript backend services
└── ...
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- Yarn package manager
- Foundry (for smart contract development)

### Installation

Install dependencies:

```bash
yarn install
```

## Development

### Smart Contracts

See the [contracts README](./contracts/README.md) for detailed instructions on working with the smart contracts.

### Backend

See the [backend README](./backend/README.md) for detailed instructions on working with the backend services.

NFT Factory address https://sepolia.etherscan.io/address/0xD762a4461a58e7815E184F9F7e6E73A72654dFF8

Implementation address https://sepolia.etherscan.io/address/0x7d95048f4a990ac4cb1ea144eb24ef7a8792a9e9

First Proxy address https://sepolia.etherscan.io/address/0x01BF83803E24ff0F1A831d9b0D9f968748B32980 (deploy via forge script)

Second Proxy address https://sepolia.etherscan.io/address/0x8cf82cD3616e0ea5B1950C1a2b793A2E0C056e27 (deploy via backend api)

Example mint transaction

https://sepolia.etherscan.io/tx/0xc1995ec24ddca5f005d0c186efef090a751ce203cd015bca46286358fbf19326 (minted via forge script)

https://sepolia.etherscan.io/tx/0x730b49a22bbe9d7c1e29c31be75794b3c00bfdbcd30a6f0b3213468db9e43f24 (minted via backend api)
