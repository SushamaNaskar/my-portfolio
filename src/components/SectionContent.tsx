import type { ReactNode } from "react";

type SectionHeadingProps = {
  id: string;
  heading: string;
  children: ReactNode;
};

const SectionContent: React.FC<SectionHeadingProps> = ({
  id,
  heading,
  children,
}) => {
  return (
    <section id={id} className="py-20 border-t border-white/10">
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-white to-indigo-400 bg-clip-text text-transparent">
            {heading}.
          </span>
        </h2>
      </div>

      {children}
    </section>
  );
};

export default SectionContent;
