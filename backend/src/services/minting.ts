import { ethers } from "ethers";
import { logger } from "../utils/logger";
import { getProvider, getSigner } from "../utils/ethers";
import { NFT_ABI } from "../constants/abis";

export async function mintNFT(
  contractAddress: string,
  recipient: string,
  tokenURI: string
) {
  try {
    const provider = getProvider();
    const signer = getSigner(provider);

    const nftContract = new ethers.Contract(contractAddress, NFT_ABI, signer);

    // Estimate gas for the transaction
    const gasEstimate = await nftContract.mint.estimateGas(recipient, tokenURI);
    logger.info(`Gas estimate for minting: ${gasEstimate}`);

    // Create the transaction with gas limit (add 20% buffer)
    const gasLimit = (gasEstimate * BigInt(120)) / BigInt(100);
    logger.info(`Gas limit for minting: ${gasLimit}`);

    const tx = await nftContract.mint(recipient, tokenURI, {
      gasLimit,
    });

    // Wait for transaction to be mined
    const receipt = await tx.wait();

    // Get the token ID from the event
    const event = receipt.logs.find(
      (log: any) => log.fragment && log.fragment.name === "Transfer"
    );

    if (!event) {
      throw new Error("Transfer event not found");
    }

    const tokenId = event.args[2];

    logger.info(`New NFT minted with ID ${tokenId} to ${recipient}`);

    return {
      tokenId: tokenId.toString(),
      transactionHash: receipt.hash,
    };
  } catch (error) {
    logger.error("Error in mintNFT:", error);
    throw error;
  }
}
