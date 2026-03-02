import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial, ThemeConfig } from "../types";

interface ExtendedTestimonialProps {
  testimonials: Testimonial[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
  theme: ThemeConfig;
}

export const TestimonialsCarousel: React.FC<ExtendedTestimonialProps> = ({
  testimonials,
  activeIndex,
  onIndexChange,
  theme,
}) => {
  const handleNext = () => {
    onIndexChange((activeIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    onIndexChange(
      (activeIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[activeIndex];

  if (!currentTestimonial) return null;

  return (
    <div className="w-full max-w-[420px] aspect-[9/16] mx-auto">
      {/* Inject Custom CSS for this slide */}
      {currentTestimonial.customCss && (
        <style>{currentTestimonial.customCss}</style>
      )}

      {/* Card Container */}
      <div
        className="slide-card relative rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 w-full h-full flex flex-col"
        style={{ backgroundColor: theme.cardBg }}
      >
        {/* Decorative Background Elements (Dynamic Colors) */}
        <div
          className="absolute top-0 left-0 -ml-16 -mt-16 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="absolute bottom-0 right-0 -mr-16 -mb-16 w-80 h-80 rounded-full opacity-40 blur-3xl pointer-events-none transition-colors duration-500"
          style={{ backgroundColor: theme.secondary }}
        ></div>

        <div className="relative z-10 p-8 flex-1 flex flex-col justify-center items-center text-center">
          {/* Quote Icon */}
          <div
            className="slide-quote mb-6 opacity-20"
            style={{ color: theme.primary }}
          >
            <Quote size={56} className="fill-current" />
          </div>

          {/* Content */}
          <div className="w-full transition-all duration-300">
            <p
              className="slide-text text-xl md:text-2xl font-medium leading-loose mb-10 max-w-2xl mx-auto text-center"
              dir="rtl"
              style={{ color: theme.textColor }}
            >
              "{currentTestimonial.text}"
            </p>

            <div className="flex flex-col items-center space-y-4">
              {/* Avatar */}
              <div className="slide-avatar-container relative group">
                <div
                  className="absolute -inset-1 rounded-full opacity-30 group-hover:opacity-50 transition duration-500 blur-sm"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                  }}
                ></div>
                <img
                  src={currentTestimonial.avatarUrl}
                  alt={currentTestimonial.name}
                  className="slide-avatar relative w-24 h-24 rounded-full object-cover border-4 shadow-lg"
                  style={{ borderColor: theme.cardBg }}
                />
              </div>

              {/* Info */}
              <div className="slide-info space-y-1">
                <h3
                  className="slide-name text-xl font-bold"
                  style={{ color: theme.textColor }}
                >
                  {currentTestimonial.name}
                </h3>
                <p
                  className="slide-meta text-base font-medium opacity-80"
                  style={{ color: theme.textColor }}
                >
                  {currentTestimonial.role} •{" "}
                  <span style={{ color: theme.primary, fontWeight: "bold" }}>
                    {currentTestimonial.companyOrCity}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="absolute bottom-8 left-0 right-0 px-8 flex justify-between items-center text-lg font-bold opacity-80 flex-row-reverse"
          style={{ color: theme.textColor }}
        >
          <span dir="ltr">al-investor</span>
          <span dir="rtl">المستثمر</span>
        </div>

        {/* Navigation Buttons inside Card */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
          <button
            onClick={handleNext}
            className="pointer-events-auto p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 rotate-180"
            style={{ color: theme.primary }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="pointer-events-auto p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 rotate-180"
            style={{ color: theme.primary }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};
