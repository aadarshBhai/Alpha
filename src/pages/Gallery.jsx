import React from 'react';
import Section from '../components/Section';
import { getGalleryItems } from '../data';
import GalleryGrid from '../components/GalleryGrid';
import { useTranslation } from '../contexts/LanguageContext';

const Gallery = () => {
  const { t } = useTranslation();
  const items = getGalleryItems();

  return (
    <Section
      id="gallery"
      title={t('gallery')}
      subtitle={t('gallerySubtitle')}
    >
      <GalleryGrid items={items} />
      <p className="gallery-note">
        {t('galleryNote')}
      </p>
    </Section>
  );
};

export default Gallery;
