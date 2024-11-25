import Tag from "@/components/tag";

const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

const soonSwapDesc =
  "SoonSwap is a decentralized exchange (DEX) on the SOON blockchain, offering fast, secure token trading with low fees and high efficiency. Built on OpenBook V2, it features a user-friendly interface and strong liquidity to support a thriving DeFi ecosystem on SOON.";

export default function Features() {
  return (
    <section>
      <div className="container">
        <Tag>Projects</Tag>
        <h2>
          Our Projects are based on frontend, backend and blockchain
          technologies, all utilizing the soo network
        </h2>
        <div>
          <div>
            <div></div>
            <h3>SoonSwap</h3>
            <p> {soonSwapDesc}</p>
          </div>
          <div>
            <div></div>
            <h3>SOON-ID</h3>
            <p> {soonSwapDesc}</p>
          </div>
          <div>
            <div></div>
            <h3>Northfund Client</h3>
            <p> {soonSwapDesc}</p>
          </div>
          <div>
            <div></div>
            <h3>Northfund Contract</h3>
            <p> {soonSwapDesc}</p>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
