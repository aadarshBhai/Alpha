import React from 'react';
import { useTranslation } from '../contexts/LanguageContext';

const TestimonialCard = ({ testimonial }) => {
  const { t } = useTranslation();
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
  const message = t(`testimonial_${testimonial.id}_message`);
  const course = t(`testimonial_${testimonial.id}_course`);

  return (
    <div className="testimonial-card">
      <p className="testimonial-message">{message}</p>
      <div className="testimonial-meta">
        <div className="testimonial-avatar">{initials}</div>
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">
            {course} · {testimonial.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
