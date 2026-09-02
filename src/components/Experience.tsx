import { Award } from "lucide-react";
import { SECTION_IDS } from "../Constants/sections";
import SectionContent from "./SectionContent";

const experiences = [
  {
    role: "Software Development Engineer 2",
    company: "Zopsmart",
    duration: "02/2022 – 05/2025 | Bengaluru",
    award: "Awarded Pivot Polaris (Best Performance Certificate - Oct 2022)",
    points: [
      "Led a 10+ member development team, driving task planning, code reviews, onboarding, and mentorship.",
      "Developed and maintained full-stack web applications using React.js, TypeScript, JavaScript, Java, and Spring Boot.",
      "Built responsive user interfaces and backend REST APIs across E-Commerce, HRMS, Dashboard, and Digital Reading platforms.",
      "Developed customer-facing features including QR-based shopping, reorder workflows, and AI/LLM-powered integrations.",
      "Implemented unit and integration testing across frontend and backend using Jest, RTL, Enzyme, and JUnit (95% coverage).",
      "Optimized frontend performance through code splitting, custom hooks, and lazy loading.",
      "Worked as a contractor deployed by Mountblue to Zopsmart for 13 months, converted to full-time employee thereafter.",
    ],
  },
  {
    role: "Software Development Engineer",
    company: "Mountblue Technologies Pvt Ltd",
    duration: "10/2021 – 02/2022 | Bengaluru",
    award: null,
    points: [
      "Built frontend web applications using React.js, JavaScript (ES6+), Redux, TypeScript, Git, and GitHub.",
      "Developed feature-rich platforms for transportation booking and social networking interfaces.",
      "Conducted data analytics projects processing IPL datasets via JavaScript and CSV workflows.",
      "Deployed and maintained web applications using Netlify and Vercel.",
    ],
  },
];

const Experience = () => {
  return (
    <SectionContent id={SECTION_IDS.EXPERIENCE} heading="Work Experience">
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="bg-[#14171d] border border-white/10 rounded-2xl p-8"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                <p className="text-indigo-400 font-medium text-sm">
                  {exp.company}
                </p>
              </div>

              <span className="text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full w-fit">
                {exp.duration}
              </span>
            </div>

            {exp.award && (
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs">
                <Award className="w-3.5 h-3.5" />
                <span>
                  Awarded <strong>Pivot Polaris</strong> (Best Performance
                  Certificate - Oct 2022)
                </span>
              </div>
            )}

            <ul className="space-y-2.5 text-sm text-gray-400">
              {exp.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-indigo-400">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionContent>
  );
};

export default Experience;
