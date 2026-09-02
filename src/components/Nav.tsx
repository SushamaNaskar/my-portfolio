import { SECTION_IDS } from "../Constants/sections";

const NAV_LINKS = [
  { label: "Work", href: `#${SECTION_IDS.WORK}`, id: SECTION_IDS.WORK },
  {
    label: "Experience",
    href: `#${SECTION_IDS.EXPERIENCE}`,
    id: SECTION_IDS.EXPERIENCE,
  },
  {
    label: "Certifications",
    href: `#${SECTION_IDS.CERTIFICATIONS}`,
    id: SECTION_IDS.CERTIFICATIONS,
  },
  { label: "Skills", href: `#${SECTION_IDS.SKILLS}`, id: SECTION_IDS.SKILLS },
  {
    label: "Contact",
    href: `#${SECTION_IDS.CONTACT}`,
    id: SECTION_IDS.CONTACT,
  },
];

const Nav = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0d0f12]/85 border-b border-white/10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href={`#${SECTION_IDS.INTRO}`}
          aria-label="Back to top"
          className="text-xl font-extrabold tracking-tight text-white hover:text-indigo-400 transition-colors"
        >
          SN<span className="text-indigo-500">.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden md:flex gap-8 text-sm font-medium text-gray-400"
        >
          {NAV_LINKS.map(({ label, href, id }) => (
            <a
              key={id}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Nav;
