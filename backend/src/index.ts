import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { tokenizeNFT } from "./services/tokenization";
import { mintNFT } from "./services/minting";
import { errorHandler } from "./middleware/errorHandler";
import { logger } from "./utils/logger";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post("/tokenize", async (req, res, next) => {
  try {
    const { name, symbol } = req.body;

    if (!name || !symbol) {
      return res.status(400).json({ error: "Name and symbol are required" });
    }

    const result = await tokenizeNFT(name, symbol);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

app.post("/mint", async (req, res, next) => {
  try {
    const { contractAddress, recipient, tokenURI } = req.body;

    if (!contractAddress || !recipient) {
      return res.status(400).json({
        error: "Contract address and recipient are required",
      });
    }

    const result = await mintNFT(contractAddress, recipient, tokenURI);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
