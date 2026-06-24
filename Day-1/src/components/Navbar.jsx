function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 md:px-12 py-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md flex items-center justify-center text-white font-bold">
          F
        </div>

        <h1 className="text-2xl font-semibold">Flowly</h1>
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-600">
        <li className="cursor-pointer hover:text-blue-600 transition-colors">
          Features
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition-colors">
          Customers
        </li>

        <li className="cursor-pointer hover:text-blue-600 transition-colors">
          Pricing
        </li>
      </ul>

      <div className="flex gap-3">
        <button className="btn-outline">Login</button>

        <button className="btn-primary">Start Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
