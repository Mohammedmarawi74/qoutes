import React from 'react';
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Testimonial, ThemeConfig } from "../types";
import './TestimonialsCarousel.css';

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
    <div className="testimonial-wrapper w-full max-w-[540px] aspect-square mx-auto">
      {/* Dynamic Slide CSS */}
      {currentTestimonial.customCss && (
        <style>{currentTestimonial.customCss}</style>
      )}

      {/* Main Card */}
      <div
        className="testimonial-card relative flex flex-col w-full h-full overflow-hidden rounded-3xl"
        style={{ backgroundColor: theme.cardBg }}
      >
        {/* Decorative Elements */}
        <div
          className="deco-circle deco-circle-top"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="deco-circle deco-circle-bottom"
          style={{ backgroundColor: theme.secondary }}
        ></div>

        <div className="relative z-10 flex flex-col flex-1 items-center p-8 pt-12 text-center justify-start">
          {/* Quote Icon */}
          <div
            className="quote-icon"
            style={{ color: theme.primary }}
          >
            <Quote size={56} className="fill-current" />
          </div>

          {/* Testimonial Content */}
          <div className="w-full transition-all duration-300">
            <p
              className="testimonial-text max-w-2xl mx-auto"
              dir="rtl"
              style={{ color: theme.textColor }}
            >
              "{currentTestimonial.text}"
            </p>

            <div className="flex flex-col items-center space-y-4">
              {/* Profile Avatar */}
              <div className="profile-avatar-wrapper group">
                <div
                  className="profile-avatar-ring"
                  style={{
                    background: `linear-gradient(to right, ${theme.primary}, ${theme.secondary})`,
                  }}
                ></div>
                <img
                  src={currentTestimonial.avatarUrl}
                  alt={currentTestimonial.name}
                  className="profile-avatar"
                  style={{ borderColor: theme.cardBg }}
                />
              </div>

              {/* Profile Details */}
              <div className="profile-info space-y-1">
                <h3
                  className="profile-name"
                  style={{ color: theme.textColor }}
                >
                  {currentTestimonial.name}
                </h3>
                <p
                  className="profile-meta"
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

        {/* Branding Branding */}
        <div className="branding-container">
          <span 
            dir="ltr" 
            className="brand-en"
            style={{ color: theme.primary }}
          >
            al-investor
          </span>
          <span 
            dir="rtl" 
            className="brand-ar"
            style={{ color: theme.primary }}
          >
            المستثمر
          </span>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-x-0 flex justify-between px-4 pointer-events-none top-1/2 -translate-y-1/2">
          <button
            onClick={handleNext}
            className="nav-button rotate-180"
            style={{ color: theme.primary }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={handlePrev}
            className="nav-button rotate-180"
            style={{ color: theme.primary }}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

