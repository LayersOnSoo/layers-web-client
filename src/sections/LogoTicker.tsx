import solanaFoundationLogo from "@/assets/images/solana-fndn.svg";
import solanLogo from "@/assets/images/solana.svg";
import CoinBase from "@/assets/images/coin-base.svg";
import AltLayer from "@/assets/images/alt-layer.svg";
import Avail from "@/assets/images/avail_logo.9c818c5a.png";
import celestialLogo from "@/assets/images/celestial.svg";

const logos = [
  { name: "Solana", image: solanLogo },
  { name: "Solana Foundation", image: solanaFoundationLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Alt Layer", image: AltLayer },
  { name: "Avail", image: Avail },
  { name: "CoinBase", image: CoinBase },
];

export default function LogoTicker() {
  return (
    <section className="py-8 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Sponsored by these market leaders
        </h3>
        <div className="overflow-hidden  [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-24 items-center pr-24">
            {logos.map((logo) => {
              return (
                <>
                  <img
                    className=""
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
