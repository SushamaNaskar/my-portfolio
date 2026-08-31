import { Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 border-t border-white/10">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
          Career
        </p>
        <h2 className="text-3xl font-bold tracking-tight">Work Experience.</h2>
      </div>

      <div className="space-y-6">
        {/* Zopsmart */}
        <div className="bg-[#14171d] border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Software Development Engineer 2
              </h3>
              <p className="text-indigo-400 font-medium text-sm">Zopsmart</p>
            </div>
            <span className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
              02/2022 – 05/2025 | Bengaluru
            </span>
          </div>

          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
            <Award className="w-3.5 h-3.5" />
            <span>
              Awarded <strong>Pivot Polaris</strong> (Best Performance
              Certificate - Oct 2022)
            </span>
          </div>

          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Led a 10+ member development team, driving task planning, code
                reviews, onboarding, and mentorship to ensure timely project
                delivery.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Developed and maintained full-stack web applications using
                React.js, TypeScript, JavaScript, Java, and Spring Boot.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Built responsive, scalable user interfaces and backend REST APIs
                across E-Commerce, HRMS, Dashboard, and Digital Reading
                platforms.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Developed customer-facing features including QR-based shopping,
                reorder functionality, and AI/LLM-powered workflows with REST
                API integrations.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Implemented unit and integration testing across frontend and
                backend using Jest, React Testing Library, Enzyme, and JUnit,
                achieving test coverage of up to 95%.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Optimized performance through code splitting, lazy loading, and
                efficient component rendering.
              </span>
            </li>
          </ul>
        </div>

        {/* Mountblue */}
        <div className="bg-[#14171d] border border-white/10 rounded-2xl p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white">
                Software Development Engineer
              </h3>
              <p className="text-indigo-400 font-medium text-sm">
                Mountblue Technologies Pvt Ltd
              </p>
            </div>
            <span className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
              10/2021 – 02/2022
            </span>
          </div>

          <ul className="space-y-2.5 text-sm text-gray-400">
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Built frontend web applications using React.js, JavaScript
                (ES6+), Redux, TypeScript, Git, and GitHub.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Developed feature-rich applications including transportation
                booking platforms and social networking interfaces with
                responsive UX.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Worked on data analytics projects involving IPL datasets using
                JavaScript and CSV data processing.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-indigo-400">▹</span>
              <span>
                Deployed and maintained web applications using Netlify and
                Vercel.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
