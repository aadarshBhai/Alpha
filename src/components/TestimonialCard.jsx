import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  const initials = testimonial.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  return (
    <div className="testimonial-card">
      <p className="testimonial-message">{testimonial.message}</p>
      <div className="testimonial-meta">
        <div className="testimonial-avatar">{initials}</div>
        <div className="testimonial-info">
          <span className="testimonial-name">{testimonial.name}</span>
          <span className="testimonial-role">
            {testimonial.course} · {testimonial.year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
