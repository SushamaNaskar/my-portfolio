import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { SECTION_IDS } from "../Constants/sections";
import { EMAIL, LINKEDIN, GITHUB } from "../Constants/personalInfos";

const Contact = () => {
  return (
    <section
      id={SECTION_IDS.CONTACT}
      className="py-20 border-t border-white/10"
    >
      <div className="bg-gradient-to-b from-[#14171d] to-[#14171d]/40 border border-white/10 rounded-3xl p-10 sm:p-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
          Let's build something great together.
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto mb-8">
          Whether you have an open engineering role, a project in mind, or just
          want to connect, my inbox is open.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-200 transition-all flex items-center gap-2"
          >
            <CiMail className="w-4 h-4" />
            sushama9722@gmail.com
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <FaLinkedin className="w-4 h-4 text-indigo-400" />
            LinkedIn
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <FaGithub className="w-4 h-4 text-indigo-400" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
