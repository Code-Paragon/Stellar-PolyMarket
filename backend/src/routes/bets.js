const express = require("express");
const router = express.Router();

// POST /api/bets — place a bet
router.post("/", (req, res) => {
  const { marketId, outcome, amount, walletAddress } = req.body;
  // TODO: validate + call Soroban contract to lock funds
  res.status(201).json({ message: "Bet placed", marketId, outcome, amount });
});

module.exports = router;
