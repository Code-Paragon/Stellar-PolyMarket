const express = require("express");
const router = express.Router();

// GET /api/markets — list all markets
router.get("/", (req, res) => {
  res.json({ markets: [] }); // TODO: fetch from DB
});

// POST /api/markets — create a market
router.post("/", (req, res) => {
  const { question, endDate, outcomes } = req.body;
  // TODO: validate + persist + deploy Soroban contract
  res.status(201).json({ message: "Market created", question, endDate, outcomes });
});

// GET /api/markets/:id
router.get("/:id", (req, res) => {
  res.json({ market: null }); // TODO: fetch by id
});

module.exports = router;
