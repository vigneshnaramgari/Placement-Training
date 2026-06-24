function Integrations() {
  return (
    <section className="bg-[#132C27] text-white py-24">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Integrations</h1>

        <p className="mt-5 text-gray-300">Connect your favorite tools</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
        <div className="integration-card">Slack</div>

        <div className="integration-card">Github</div>

        <div className="integration-card">Discord</div>

        <div className="integration-card">Notion</div>

        <div className="integration-card">Stripe</div>

        <div className="integration-card">Asana</div>

        <div className="integration-card">Figma</div>

        <div className="integration-card">Trello</div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="btn-outline">View all integrations</button>
      </div>
    </section>
  );
}

export default Integrations;
