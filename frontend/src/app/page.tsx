export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center py-24 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Stella Polymarket</h1>
        <p className="text-xl text-gray-400 max-w-xl mb-8">
          Decentralized prediction markets on Stellar. Forecast real-world events and earn rewards.
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
            Explore Markets
          </button>
          <button className="border border-gray-600 hover:border-gray-400 px-6 py-3 rounded-lg font-semibold">
            Connect Wallet
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-3 gap-6 max-w-3xl mx-auto px-4 pb-16 text-center">
        {[
          { label: "Active Markets", value: "24" },
          { label: "Total Staked", value: "1.2M XLM" },
          { label: "Users", value: "3,400+" },
        ].map((stat) => (
          <div key={stat.label} className="bg-gray-900 rounded-xl p-6">
            <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
            <p className="text-gray-400 mt-1">{stat.label}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
