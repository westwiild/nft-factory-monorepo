import { ethers } from "ethers";

export function getProvider() {
  if (!process.env.RPC_URL) {
    throw new Error("RPC URL not configured");
  }
  return new ethers.JsonRpcProvider(process.env.RPC_URL);
}

export function getSigner(provider: ethers.Provider) {
  if (!process.env.PRIVATE_KEY) {
    throw new Error("Private key not configured");
  }
  return new ethers.Wallet(process.env.PRIVATE_KEY, provider);
}
