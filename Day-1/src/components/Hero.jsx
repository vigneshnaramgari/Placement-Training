function Hero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(#d9d9d9_1px,transparent_1px),linear-gradient(90deg,#d9d9d9_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />

      <div className="relative z-10 text-center px-6 md:px-0">
        <span className="border px-4 py-2 rounded-full text-sm text-gray-600">
          🚀 Productivity Platform
        </span>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mt-8 leading-tight">
          Manage projects
          <br />
          and teams <span className="text-blue-600">smarter</span>
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-gray-500 text-lg">
          Everything you need to collaborate, track progress and grow your
          business.
        </p>

        <div className="flex justify-center gap-5 mt-8">
          <button className="btn-primary">Start Free</button>

          <button className="btn-outline">Watch Demo</button>
        </div>

        <div className="mt-12 flex justify-center gap-12 text-lg font-medium text-gray-400">
          <p>Slack</p>

          <p>Notion</p>

          <p>Figma</p>

          <p>Github</p>

          <p>Stripe</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
