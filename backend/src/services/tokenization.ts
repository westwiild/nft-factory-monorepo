import { ethers } from "ethers";
import { logger } from "../utils/logger";
import { getProvider, getSigner } from "../utils/ethers";
import { FACTORY_ABI } from "../constants/abis";

export async function tokenizeNFT(name: string, symbol: string) {
  try {
    const provider = getProvider();
    const signer = getSigner(provider);
    const factoryAddress =
      process.env.FACTORY_CONTRACT_ADDRESS ||
      (() => {
        try {
          const deploymentPath = require.resolve(
            "../../../contracts/broadcast/Deploy.s.sol/11155111/run-latest.json"
          );
          const deployment = require(deploymentPath);
          logger.info(deployment.transactions[1].contractAddress);
          return deployment.transactions[1].contractAddress;
        } catch (error) {
          throw new Error("Factory contract address not configured");
        }
      })();

    logger.info(`Using factory contract address: ${factoryAddress}`);

    const factoryContract = new ethers.Contract(
      factoryAddress,
      FACTORY_ABI,
      signer
    );

    // Estimate gas for the transaction
    const gasEstimate = await factoryContract.deployClone.estimateGas(
      name,
      symbol
    );
    logger.info(`Gas estimate for tokenization: ${gasEstimate}`);

    // Create the transaction with gas limit (add 20% buffer)
    const gasLimit = (gasEstimate * BigInt(120)) / BigInt(100);
    logger.info(`Gas limit for tokenization: ${gasLimit}`);

    const contractAddress = await factoryContract.deployClone.staticCall(
      name,
      symbol,
      {
        gasLimit,
      }
    );
    logger.info(`Deploying contract address: ${contractAddress}`);

    // Deploy the clone and get the contract address directly from the function call
    const tx = await factoryContract.deployClone(name, symbol, {
      gasLimit,
    });

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    logger.info(`New NFT contract deployed at ${contractAddress}`);

    return {
      contractAddress,
      transactionHash: receipt.hash,
    };
  } catch (error) {
    logger.error("Error in tokenizeNFT:", error);
    throw error;
  }
}
