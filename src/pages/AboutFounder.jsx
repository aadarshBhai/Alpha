import React from 'react';
import Section from '../components/Section';
import { getFounder } from '../data';

const AboutFounder = () => {
  const founder = getFounder();

  return (
    <>
      <Section
        id="about-founder"
        title="Meet our Founder"
        subtitle="Anand Sir — Leading with discipline, experience, and a commitment to academic excellence."
      >
        <div className="about-founder-layout">
          <div className="about-founder-photo">
            <img src={founder.image} alt={founder.name} />
          </div>
          <div className="about-founder-content">
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{founder.name}</h3>
            <p className="about-founder-title" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '1.125rem' }}>{founder.title}</p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}>{founder.intro}</p>
              {founder.bioParagraphs.map((p, idx) => (
                <p key={idx} style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="grid-2">
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Vision</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>{founder.vision}</p>
          </div>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>Our Mission</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>{founder.mission}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutFounder;
