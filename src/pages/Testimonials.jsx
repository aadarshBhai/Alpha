import React from 'react';
import Section from '../components/Section';
import { getTestimonials } from '../data';
import TestimonialCard from '../components/TestimonialCard';
import { useTranslation } from '../contexts/LanguageContext';

const Testimonials = () => {
  const { t } = useTranslation();
  const testimonials = getTestimonials();

  return (
    <Section
      id="testimonials"
      title={t('testimonials')}
      subtitle={t('testimonialsSubtitle')}
    >
      <div className="grid-2">
        {testimonials.map((t) => (
          <TestimonialCard key={t.id} testimonial={t} />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
