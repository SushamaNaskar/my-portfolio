const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0f12]/85 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          SN<span className="text-indigo-500">.</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
