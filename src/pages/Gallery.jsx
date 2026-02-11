import React from 'react';
import Section from '../components/Section';
import { getGalleryItems } from '../data';
import GalleryGrid from '../components/GalleryGrid';

const Gallery = () => {
  const items = getGalleryItems();

  return (
    <Section
      id="gallery"
      title="Gallery"
      subtitle="A glimpse of our classrooms, tests and student interactions."
    >
      <GalleryGrid items={items} />
      <p className="gallery-note">
        Replace with actual classroom and event photos from The ALPHA CLASSES.
      </p>
    </Section>
  );
};

export default Gallery;
