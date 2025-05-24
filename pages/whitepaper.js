
import React from 'react';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-black text-orange-500 px-4 py-12 w-full">
      <div className="text-center mb-10">
        <a
          href="/"
          className="inline-block bg-orange-500 text-black px-4 py-2 rounded-xl font-bold hover:bg-orange-400 transition"
        >
          ← Back to site
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-10">SURVIVR - Whitepaper</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
        <p className="mb-2">SURVIVR is not just an NFT. It’s a game. A brutal one. Fully on-chain. Immutable. Ruthless. Designed to reward one - and eliminate the rest.</p>
        <p>Mint your ticket. Survive the burn. Win the pot.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">2. Game Mechanics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>999 NFTs to mint.</li>
          <li>Each NFT represents one entry in the survival game.</li>
          <li>Once all NFTs are minted, the elimination begins.</li>
          <li>Every minute, one token is burned. Randomly.</li>
          <li>Eliminated tokens are permanently removed from the supply.</li>
          <li>The last NFT alive wins 70% of the total ETH raised.</li>
        </ul>
        <p className="mt-4">NFTs will visually evolve based on survival milestones: Top 500, Top 250, Top 100, Top 50, Top 25... Eliminated NFTs go gray with X eyes.</p>
        <p>The entire process is automated. Once started, no one can stop it.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">3. Smart Contract Logic</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Deployed on Ethereum mainnet.</li>
          <li>Contract follows the ERC-721A standard for optimized minting.</li>
          <li>Random elimination handled via Chainlink VRF or equivalent secure randomness oracle.</li>
          <li>Automation triggered by cron or keeper network to eliminate one NFT every minute.</li>
          <li>Winner is the last token remaining in the supply.</li>
          <li>ETH payout is automatic and on-chain to the final wallet.</li>
        </ul>
        <p>No admin keys. No pauses. No manual overrides.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">4. Mint Economics</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Mint price: 0.01 ETH</li>
          <li>Supply: 999 tokens</li>
          <li>If sold out, total collected: 9.99 ETH</li>
          <li>70% sent to last surviving NFT holder (≈ 7 ETH)</li>
          <li>30% is reserved for development, infrastructure, marketing, and future project funding, with the remaining share belonging to the creator.</li>
        </ul>
        <p>Royalties: 2.5% on secondary sales (100% to the creator)</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">5. Security & Fairness</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Code is open-source.</li>
          <li>All mechanics are on-chain and immutable.</li>
          <li>Chainlink VRF (or similar) ensures fair randomization.</li>
          <li>No centralized interference.</li>
          <li>Planned audit post-mint before elimination starts (if community funded)</li>
        </ul>
        <p>Transparency is core to SURVIVR.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">6. NFT Utility & Evolution</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>NFTs change visually as the game progresses.</li>
          <li>Color schemes, rarity frames, survivor rankings</li>
          <li>Top survivors gain cosmetic distinctions</li>
          <li>Eliminated NFTs marked and grayed out</li>
          <li>Survivor NFTs are badges of honor - collectibles with battle scars</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">7. Timeline</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Launch site + teaser: ✅</li>
          <li>Giveaway & early marketing: In progress</li>
          <li>Mint start: TBD</li>
          <li>Elimination start: after sellout</li>
          <li>Game duration: approx. 999 minutes (~17h)</li>
          <li>ETH payout: instant after game ends</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">8. About the Creator</h2>
        <p>No team. No DAO. No roadmap.</p>
        <p>Just a guy with a dumb idea that got out of hand. Built for fun. Built for risk.</p>
        <p className="mt-2">Twitter/X: <a href="https://twitter.com/Survivrnbrone" className="underline text-orange-300" target="_blank">@Survivrnbrone</a></p>
      </section>

      <p className="text-center italic mt-12 text-orange-400">SURVIVR isn’t for everyone. But for one? It’s everything. Good luck, player.</p>
    </div>
  );
}
