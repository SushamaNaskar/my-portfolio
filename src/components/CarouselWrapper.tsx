import React, { useState } from "react";
import type { ReactNode } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface CarouselWrapperProps {
  children: ReactNode[];
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasMultipleItems = children.length > 1;

  const prev = () => setCurrentIndex((idx) => Math.max(0, idx - 1));
  const next = () =>
    setCurrentIndex((idx) => Math.min(children.length - 1, idx + 1));

  return (
    <div className="relative w-full">
      {/* Show arrows ONLY if there is more than 1 item */}
      {hasMultipleItems && (
        <div className="flex justify-end gap-2 mb-4">
          <button
            onClick={prev}
            disabled={currentIndex === 0}
            aria-label="Previous"
            className="p-2.5 rounded-xl bg-[#14171d] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={currentIndex === children.length - 1}
            aria-label="Next"
            className="p-2.5 rounded-xl bg-[#14171d] border border-white/10 text-white hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Slide Container using CSS Transform */}
      <div className="overflow-hidden w-full">
        <div
          data-testid="carousel-track"
          className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {children.map((child, idx) => (
            <div key={idx} className="w-full shrink-0">
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselWrapper;
