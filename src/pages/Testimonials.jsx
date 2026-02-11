import React from 'react';
import Section from '../components/Section';
import { getTestimonials } from '../data';
import TestimonialCard from '../components/TestimonialCard';

const Testimonials = () => {
  const testimonials = getTestimonials();

  return (
    <Section
      id="testimonials"
      title="Testimonials"
      subtitle="Honest feedback from students and their journey with The ALPHA CLASSES."
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
