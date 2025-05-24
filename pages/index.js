export default function Home() {
  return (
    <div className="min-h-screen bg-black text-orange-500 flex flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-extrabold tracking-widest mb-6">SURVIVR</h1>
      <p className="text-lg text-orange-300 mb-6">A survival game on-chain</p>

      <a
        href="#whitepaper"
        className="bg-orange-500 text-black px-6 py-2 rounded-xl font-bold hover:bg-orange-400 transition"
      >
        Read the Whitepaper
      </a>

      <p className="text-sm text-orange-300 mt-8">Mint coming soon</p>
      <a
        href="https://twitter.com/Survivrnbrone"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline text-orange-400 mt-2"
      >
        Follow us on X
      </a>

      <div id="whitepaper" className="mt-20 max-w-3xl text-left">
        <h2 className="text-2xl font-bold mb-4">SURVIVR Whitepaper (Lite)</h2>
        <p className="mb-4">
          SURVIVR is a fully on-chain death game. 999 NFTs enter. 1 survives.
          Elimination is random. The last wallet standing wins 70% of the pot.
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Mint: 0.01 ETH per NFT</li>
          <li>1 elimination every minute (after sellout)</li>
          <li>NFTs evolve visually as players are eliminated</li>
          <li>Final reward sent automatically to the last survivor</li>
        </ul>
        <p className="mt-6 text-orange-300 text-sm">
          Full whitepaper coming soon with smart contract & audit details.
        </p>
      </div>
    </div>
  );
}
