import Nav from "./Nav";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d0f12] text-[#f3f4f6] font-sans selection:bg-indigo-500/30 selection:text-indigo-200">
      <Nav />

      <main className="max-w-5xl mx-auto px-6">
        <Introduction />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-gray-500">
        <p>© 2026 Sushama Naskar. Software Developer.</p>
      </footer>
    </div>
  );
};

export default Home;
