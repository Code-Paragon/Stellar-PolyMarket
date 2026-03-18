#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Address, Env, Map, String, Symbol, Vec};

#[contracttype]
pub enum DataKey {
    Market(u64),
    Bet(u64, Address),
}

#[contracttype]
#[derive(Clone)]
pub struct Market {
    pub id: u64,
    pub question: String,
    pub end_date: u64,
    pub outcomes: Vec<String>,
    pub resolved: bool,
    pub winning_outcome: u32,
}

#[contract]
pub struct PredictionMarket;

#[contractimpl]
impl PredictionMarket {
    /// Create a new prediction market
    pub fn create_market(
        env: Env,
        id: u64,
        question: String,
        end_date: u64,
        outcomes: Vec<String>,
    ) {
        let market = Market {
            id,
            question,
            end_date,
            outcomes,
            resolved: false,
            winning_outcome: 0,
        };
        env.storage().instance().set(&DataKey::Market(id), &market);
    }

    /// Place a bet on an outcome
    pub fn place_bet(env: Env, market_id: u64, outcome_index: u32, bettor: Address) {
        bettor.require_auth();
        // TODO: transfer XLM/token to contract, record bet
    }

    /// Resolve market with winning outcome (oracle-triggered)
    pub fn resolve_market(env: Env, market_id: u64, winning_outcome: u32) {
        let mut market: Market = env
            .storage()
            .instance()
            .get(&DataKey::Market(market_id))
            .unwrap();
        market.resolved = true;
        market.winning_outcome = winning_outcome;
        env.storage()
            .instance()
            .set(&DataKey::Market(market_id), &market);
    }

    /// Distribute rewards to winners
    pub fn distribute_rewards(env: Env, market_id: u64) {
        // TODO: calculate proportional payouts and transfer
    }
}
