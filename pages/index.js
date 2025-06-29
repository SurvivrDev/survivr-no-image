export default function Home() {
  return (
    <div className="min-h-screen bg-black text-orange-500 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-extrabold tracking-widest mb-6">SURVIVR</h1>
      <p className="text-lg text-orange-300 mb-6">A survival game on-chain</p>

      <a
  href="/whitepaper"
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

      <div id="whitepaper" className="mt-20 max-w-3xl text-center">
        <h2 className="text-2xl font-bold mb-4">SURVIVR Whitepaper (Lite)</h2>
        <p className="mb-2">
  SURVIVR is a fully on-chain death game. 999 NFTs to mint. 1 survives.
  Elimination is random.
</p>
<p className="mb-4 font-semibold text-orange-400">
  The last wallet standing wins 70% of the pot.
</p>
        <ul className="list-disc list-inside space-y-2 inline-block text-left">
          <li className="text-center">Mint: 0.01 ETH per NFT</li>
          <li className="text-center">1 elimination every minute (after minted-out)</li>
          <li className="text-center">NFTs evolve visually as players are eliminated</li>
          <li className="text-center">Final reward sent automatically to the last survivor</li>
        </ul>
<div className="mt-6 flex flex-col items-center">
  <button
    disabled
    className="bg-orange-500 text-black font-bold py-3 px-6 rounded-xl opacity-50 cursor-not-allowed"
  >
    Mint
  </button>
  <span className="text-sm text-orange-300 mt-2">Coming soon</span>
</div>

<div className="mt-6 flex flex-col items-center">
  <div className="h-4 w-64 bg-orange-100 rounded-full overflow-hidden">
    <div className="h-4 bg-orange-500" style={{ width: "0%" }}></div>
  </div>
  <p className="text-sm text-orange-300 mt-2">0 / 999 minted</p>
</div>


        <p className="mt-6 text-orange-300 text-sm">
          Whitepaper is live. Smart Contract under test. Audit drop next.
        </p>
<p className="mt-2 text-orange-400 text-xs break-words">
  Contract Address:<br />
  <span className="font-mono">0x51ae61341B8Eef35a56F6c3C29b4Ba6Bee025c22</span>
</p>
      </div>
    </div>
  );
}
