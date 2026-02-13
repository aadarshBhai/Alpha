import React from 'react';
import Section from '../components/Section';
import { getFounder } from '../data';
import { useTranslation } from '../contexts/LanguageContext';

const founderBioKeys = ['founderBio1', 'founderBio2', 'founderBio3'];

const AboutFounder = () => {
  const { t } = useTranslation();
  const founder = getFounder();

  return (
    <>
      <Section
        id="about-founder"
        title={t('meetFounder')}
        subtitle={t('meetFounderSubtitle')}
      >
        <div className="about-founder-layout">
          <div className="about-founder-photo">
            <img src={founder.image} alt={founder.name} />
          </div>
          <div className="about-founder-content">
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{founder.name}</h3>
            <p className="about-founder-title" style={{ color: 'var(--color-accent)', fontWeight: '600', fontSize: '1.125rem' }}>{t('founderTitle')}</p>
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontSize: '1.125rem', lineHeight: '1.8', color: 'var(--color-text)' }}>{t('founderIntro')}</p>
              {founderBioKeys.map((key) => (
                <p key={key} style={{ marginTop: '1.5rem', lineHeight: '1.8' }}>{t(key)}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section background="muted">
        <div className="grid-2">
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{t('ourVision')}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>{t('founderVision')}</p>
          </div>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--color-accent)', marginBottom: '1.5rem' }}>{t('ourMission')}</h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>{t('founderMission')}</p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default AboutFounder;
