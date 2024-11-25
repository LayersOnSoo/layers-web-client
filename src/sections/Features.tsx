import Tag from "@/components/tag";
import FeatureCard from "@/components/featureCard";

const technologies = [
  "Anchor",
  "Rust",
  "Solana Web3js",
  "Typescript",
  "Unit Testing (Mocha)",
  "Tailwind CSS",
  "Soon Network RPC",
];

const soonSwapDesc =
  "SoonSwap is a decentralized exchange (DEX) on the SOON blockchain, offering fast, secure token trading with low fees and high efficiency. Built on OpenBook V2, it features a user-friendly interface and strong liquidity to support a thriving DeFi ecosystem on SOON.";

const soonIdDesc =
  "This module analyzes the on-chain footprint of an address on the SOON network to derive a credibility score based on various criteria such as transaction history, token balances, smart contract interactions, and staking activities.";

const northfundClientDesc = `NorthFund is a platform that empowers students with financial needs by connecting them with global supporters through decentralized crowdfunding. Using the soon network, NorthFund provides a secure, transparent, and fast way for students to raise funds and achieve their educational goals.`;

const northFundContractDesc = `The NorthFund smart contract on the soon blockchain enables secure, transparent, and efficient crowdfunding for students. It handles contributions, ensures fund distribution, and maintains a decentralized ledger for trustless transactions, empowering both students and supporters.`;

export default function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Projects</Tag>
        </div>
        <h2 className="text-6xl font-medium text-center mt-6">
          Our Projects are based on{" "}
          <span className="text-lime-400">
            frontend, backend and blockchain technologies{" "}
          </span>{" "}
          , all built on SooNetwork.
        </h2>
        <div className=" mt-12  grid md:grid-cols-2 grid-cols-1 gap-8 ">
          <FeatureCard
            title="SoonSwap"
            desc={soonSwapDesc}
            repoUrl="https://github.com/LayersOnSoo/soonswap"
          />
          <FeatureCard
            title="NorthFund Client"
            desc={northfundClientDesc}
            repoUrl="https://github.com/LayersOnSoo/north-client-soon"
          />

          <FeatureCard
            title="NorthFund Contract"
            desc={northFundContractDesc}
            repoUrl="https://github.com/LayersOnSoo/northfund"
          />
          <FeatureCard
            title="SoonId"
            desc={soonIdDesc}
            repoUrl="https://github.com/LayersOnSoo/soon-id"
          />
        </div>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          {technologies.map((technology) => {
            return (
              <div
                className="boder border-white/10 bg-neutral-900 inline-flex px-3 py-1.5 md:py-2 rounded-2xl gap-3 items-center"
                key={technology}
              >
                <span className=" bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">
                  &#10038;
                </span>
                <span className="font-medium md:text-lg">{technology}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
