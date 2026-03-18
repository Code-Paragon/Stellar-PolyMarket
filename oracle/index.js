require("dotenv").config();
const axios = require("axios");

/**
 * Oracle service — fetches external data and triggers market resolution
 * via the backend API.
 */

async function resolveMarket(marketId, question) {
  console.log(`Resolving market ${marketId}: "${question}"`);

  // TODO: implement per-market resolution logic
  // Example: call a sports API, financial feed, or weather API
  // then POST to /api/markets/:id/resolve with the winning outcome

  const winningOutcome = await fetchOutcome(question);

  await axios.post(`${process.env.API_URL}/api/markets/${marketId}/resolve`, {
    winningOutcome,
  });

  console.log(`Market ${marketId} resolved → outcome: ${winningOutcome}`);
}

async function fetchOutcome(question) {
  // Placeholder — replace with real oracle logic
  return 0;
}

module.exports = { resolveMarket };
