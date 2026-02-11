import React from 'react';

const Section = ({ id, title, subtitle, children, background = 'default' }) => {
  const className = `section section-${background}`;
  return (
    <section id={id} className={className}>
      <div className="container">
        {(title || subtitle) && (
          <header className="section-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
