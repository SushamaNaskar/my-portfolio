import { Code2, Server, Wrench, Sparkles } from "lucide-react";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code2 className="w-5 h-5 text-indigo-400" />,
      items: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Redux",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Bootstrap",
      ],
    },
    {
      category: "Backend & DB",
      icon: <Server className="w-5 h-5 text-indigo-400" />,
      items: [
        "Java 8 / Core Java",
        "Spring Boot",
        "Spring MVC",
        "Hibernate",
        "Spring Data JPA",
        "Microservices",
        "REST APIs",
        "MySQL",
        "SQL Server",
      ],
    },
    {
      category: "DevOps & Testing",
      icon: <Wrench className="w-5 h-5 text-indigo-400" />,
      items: [
        "AWS",
        "Git / GitHub",
        "Netlify",
        "Vercel",
        "Jest",
        "React Testing Library",
        "Playwright",
        "JUnit",
      ],
    },
    {
      category: "AI & Tools",
      icon: <Sparkles className="w-5 h-5 text-indigo-400" />,
      items: [
        "GitHub Copilot",
        "Claude AI",
        "ChatGPT API",
        "Gemini",
        "Postman",
        "Jira",
        "Confluence",
        "Agile / Scrum",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 border-t border-white/10">
      <div className="mb-12">
        <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">
          Capabilities
        </p>
        <h2 className="text-3xl font-bold tracking-tight">
          Skills & Technologies.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skillGroup) => (
          <div
            key={skillGroup.category}
            className="bg-[#14171d] border border-white/10 rounded-2xl p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              {skillGroup.icon}
              <h3 className="font-bold text-base text-white">
                {skillGroup.category}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
