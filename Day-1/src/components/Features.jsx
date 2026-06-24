function Features() {
  return (
    <section className="py-24 px-12">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Features</h1>

        <p className="mt-4 text-gray-500">Powerful tools for modern teams</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-20">
        <div className="bg-slate-100 p-10 rounded-3xl flex flex-col gap-6">
          <h1 className="text-3xl font-bold">📊 Dashboard</h1>

          <p className="mt-2">Track projects with analytics</p>

          <div className="mt-auto">
            <button className="btn-secondary">Learn more</button>
          </div>
        </div>

        <div className="bg-slate-100 p-10 rounded-3xl flex flex-col gap-6">
          <h1 className="text-3xl font-bold">🔔 Notifications</h1>

          <p className="mt-2">Never miss important updates</p>

          <div className="mt-auto">
            <button className="btn-secondary">Learn more</button>
          </div>
        </div>

        <div className="bg-slate-100 p-10 rounded-3xl flex flex-col gap-6">
          <h1 className="text-3xl font-bold">✅ Tasks</h1>

          <p className="mt-2">Manage work efficiently</p>

          <div className="mt-auto">
            <button className="btn-secondary">Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
