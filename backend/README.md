# Backend Services

This directory contains the backend services for the NFT Factory project, built with TypeScript.

## Project Structure

```
backend/
├── src/           # Source files
├── dist/          # Compiled output
└── ...
```

## Setup

1. Install dependencies:

```bash
yarn install
```

2. Build the project:

```bash
yarn build
```

## Development

### Running in Development Mode

```bash
yarn start
```

## Environment Variables

Create a `.env` file in the root of the backend directory with the following variables:

```env
PRIVATE_KEY=your_private_key

RPC_URL=https://ethereum-sepolia-rpc.publicnode.com
FACTORY_CONTRACT_ADDRESS=factory_contract_address(if not set, auto triggered from last transaction)
PORT=3000
NODE_ENV=development
```

## API Endpoints

### Tokenization

#### Create NFT Collection

```http
POST /tokenize
Content-Type: application/json

{
    "name": "My NFT Collection",
    "symbol": "MNFT"
}
```

Response:

```json
{
  "contractAddress": "0x...",
  "transactionHash": "0x..."
}
```

### Minting

#### Mint NFT

```http
POST /mint
Content-Type: application/json

{
    "contractAddress": "0x..."
    "recipient": "0x...",
    "tokenURI": "https://..."
}
```

Response:

```json
{
  "tokenId": "1",
  "transactionHash": "0x..."
}
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
