function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-12">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h1 className="text-2xl font-bold">Flowly</h1>

          <p className="mt-5 text-gray-400">
            Build faster. Collaborate better.
          </p>

          <div className="mt-6">
            <button className="btn-primary">Start free trial</button>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-gray-200">Company</h2>

          <p className="mt-3 text-gray-300">About</p>

          <p className="text-gray-300">Careers</p>

          <p className="text-gray-300">Blog</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-200">Resources</h2>

          <p className="mt-3 text-gray-300">Docs</p>

          <p className="text-gray-300">Help Center</p>

          <p className="text-gray-300">Support</p>
        </div>

        <div>
          <h2 className="font-semibold text-gray-200">Socials</h2>

          <p className="mt-3 text-gray-300">Github</p>

          <p className="text-gray-300">Twitter</p>

          <p className="text-gray-300">LinkedIn</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
