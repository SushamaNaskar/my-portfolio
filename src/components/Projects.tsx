import { ArrowUpRight, ChevronRight } from "lucide-react";

const Projects = () => {
  return (
    <section id="work" className="py-20 border-t border-white/10">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
          Featured Project
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          Built with modern tech.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div className="group bg-[#14171d] border border-white/10 hover:border-indigo-500/40 rounded-2xl p-8 transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.4)] hover:-translate-y-1">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold group-hover:text-indigo-300 transition-colors">
              Resume Analysis Application
            </h3>
            <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors" />
          </div>

          <div className="flex flex-wrap gap-2 my-4">
            {[
              "React.js",
              "Spring Boot",
              "Java",
              "JWT",
              "MySQL",
              "ChatGPT API",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <ul className="space-y-2.5 mt-6 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>
                Built a full-stack ATS Resume Analysis platform using MVC
                architecture.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>
                Implemented secure authentication using Spring Security and JWT.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>
                Integrated ChatGPT API to analyze resumes and generate ATS score
                insights.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
              <span>
                Developed REST APIs and responsive frontend interfaces for
                resume analysis workflows.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
