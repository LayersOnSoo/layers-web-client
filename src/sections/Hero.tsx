import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex py-1  px-3 bg-gradient-to-r from-green-400 to-lime-400 rounded-full text-neutral-900 ">
            The future is $SOO.Network
          </div>
        </div>
        <h1 className="text-6xl font-mono font-medium md:text-7xl text-center mt-6">
          Impactful Projects, Created With Focus On Soo.Network
        </h1>
        <p className="text-center mx-auto text-xl mt-8 max-w-2xl text-white/50">
          Discover innovative projects and solutions built on the $SOO.Network
          platform, driving the future of decentralized collaboration,
          sustainability, and impact. Join us in shaping a community where ideas
          transform into reality, and the power of blockchain enables lasting
          change.
        </p>
        <div className="flex py-8 items-center justify-center">
          <Button
            size="sm"
            variant="primary"
            className="whitespace-nowrap text-[20px] hover:bg-gradient-to-r from-lime-400 to-green-400 hover:border-transparent font-thin items-center"
            type="submit"
          >
            explore hackathon projects{" "}
          </Button>
        </div>
      </div>
    </section>
  );
}
