import { ArrowUpRight, ChevronRight } from "lucide-react";
import { SECTION_IDS } from "../Constants/sections";
import CarouselWrapper from "./CarouselWrapper";
import SectionContent from "./SectionContent";

const projects = [
  {
    title: "Resume Analysis Application",
    link: "",
    description:
      "Full-stack ATS Resume Analysis platform using MVC architecture and secure JWT authentication.",
    tags: ["React.js", "Spring Boot", "JWT", "MySQL", "ChatGPT API"],
    points: [
      "Built an end-to-end ATS Resume Analysis platform using clean MVC architecture.",
      "Implemented secure authentication and authorization using Spring Security and JWT.",
      "Integrated ChatGPT API to analyze resumes and generate actionable ATS score insights.",
      "Developed REST APIs and responsive frontend interfaces for resume analysis workflows.",
    ],
  },
];

const Projects = () => {
  return (
    <SectionContent id={SECTION_IDS.WORK} heading="Featured Projects">
      <CarouselWrapper>
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="h-full bg-[#14171d] border border-white/10 hover:border-indigo-500/40 rounded-2xl p-8 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-white">{proj.title}</h3>
                {proj.link && (
                  <ArrowUpRight className="w-5 h-5 text-gray-400" />
                )}
              </div>
              <p className="text-gray-400 text-sm mb-4">{proj.description}</p>

              <div className="flex flex-wrap gap-2 my-4">
                {proj.tags.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5 mt-6 text-sm text-gray-400">
                {proj.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-indigo-400 mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </CarouselWrapper>
    </SectionContent>
  );
};

export default Projects;
