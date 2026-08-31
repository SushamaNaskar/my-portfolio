import { Mail } from "lucide-react";

const Introduction = () => {
  return (
    <section id="hero" className="py-24 md:py-32">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8">
        <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
        Available for full-time opportunities
      </div>

      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
        Hi, I'm Sushama Naskar. <br />
        <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
          Software Developer.
        </span>
      </h1>

      <p className="text-lg sm:text-xl text-gray-400 max-w-2xl font-light leading-relaxed mb-10">
        Software Developer with 3+ years of experience building responsive,
        production-grade web applications using React.js, Next.js, Redux,
        TypeScript, Java, and Spring Boot.
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#work"
          className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all transform hover:-translate-y-0.5"
        >
          Explore My Work
        </a>
        <a
          href="mailto:sushama9722@gmail.com"
          className="px-6 py-3 rounded-xl bg-[#14171d] border border-white/10 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Mail className="w-4 h-4 text-indigo-400" />
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Introduction;
