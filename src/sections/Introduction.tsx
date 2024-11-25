import Tag from "@/components/tag";

const text = `Welcome to LayersOnSoo, the hub for innovative projects on the SOON blockchain, where we showcase cutting-edge decentralized apps, foster collaboration, and drive the future of decentralized tech.`;

export default function Introduction() {
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>
        <div className="text-4xl md:text-6xl text-center font-medium mt-10">
          <span> Building On The SooNetwork.</span>{" "}
          <span className="text-white/15">{text}</span>
          <span className="text-lime-400 block">
            That's why we built Layers
          </span>
        </div>
      </div>
    </section>
  );
}
