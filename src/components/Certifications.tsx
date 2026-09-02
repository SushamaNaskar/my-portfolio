import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SECTION_IDS } from "../Constants/sections";
import CarouselWrapper from "./CarouselWrapper";
import reactCertImg from "../assests/namaste-react.png";
import jsCertImg from "../assests/namaste-javascript.png";
import greyCampusImg from "../assests/greycampus-fullstack.png";
import SectionContent from "./SectionContent";

const certificates = [
  {
    title: "Namaste React",
    issuer: "NamasteDev.com · Akshay Saini",
    date: "2025",
    id: "1",
    type: "Certificate",
    image: reactCertImg,
  },
  {
    title: "Namaste JavaScript",
    issuer: "NamasteDev.com · Akshay Saini",
    date: "2025",
    id: "2",
    type: "Certificate",
    image: jsCertImg,
  },
  {
    title: "A Foundation Program in Full Stack",
    issuer: "GreyCampus",
    date: "19th Feb 2021",
    id: "3",
    type: "Certificate",
    image: greyCampusImg,
  },
];

interface CertificatePreview {
  title: string;
  image: string;
}

interface ModalProps {
  previewCert: CertificatePreview;
  onClose: () => void;
}

const Modal = ({ previewCert, onClose }: ModalProps) => {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 select-none"
      onClick={() => onClose()}
    >
      <div
        className="relative max-w-3xl w-full bg-[#14171d] border border-white/10 rounded-2xl p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
          <h3 className="text-base font-bold text-white">
            {previewCert.title}
          </h3>
          <button
            onClick={() => onClose()}
            className="text-gray-400 hover:text-white text-sm font-semibold p-1"
          >
            ✕ Close
          </button>
        </div>

        {/* Protected Certificate Image (Disabled right-click & drag) */}
        <div
          className="relative flex items-center justify-center bg-black/40 rounded-xl overflow-hidden p-2 border border-white/5"
          onContextMenu={(e) => e.preventDefault()}
        >
          <img
            src={previewCert.image}
            alt={previewCert.title}
            className="max-h-[70vh] w-auto object-contain rounded-lg pointer-events-none select-none"
            draggable="false"
          />
        </div>
      </div>
    </div>
  );
};

const Certifications = () => {
  const [previewCert, setPreviewCert] = useState<{
    title: string;
    image: string;
  } | null>(null);

  return (
    <SectionContent id={SECTION_IDS.CERTIFICATIONS} heading="Certifications">
      <CarouselWrapper>
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="h-full bg-[#14171d] border border-white/10 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {cert.type}
                </span>
                {cert.date && (
                  <span className="text-xs text-gray-400">{cert.date}</span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {cert.title}
              </h3>
              <p className="text-sm font-medium text-gray-300 mb-3">
                {cert.issuer}
              </p>
            </div>

            <div>
              <button
                onClick={() =>
                  setPreviewCert({ title: cert.title, image: cert.image })
                }
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                <span>View Certificate</span>
                <ArrowUpRight className="w-4 h-4 text-indigo-400" />
              </button>
            </div>
          </div>
        ))}
      </CarouselWrapper>

      {/* View-Only Protected Modal */}
      {previewCert && (
        <Modal previewCert={previewCert} onClose={() => setPreviewCert(null)} />
      )}
    </SectionContent>
  );
};

export default Certifications;
