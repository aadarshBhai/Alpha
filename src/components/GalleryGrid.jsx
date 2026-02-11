import React from 'react';

const GalleryGrid = ({ items }) => (
  <div className="gallery-grid">
    {items.map((item) => (
      <figure key={item.id} className="gallery-item">
        <img src={item.src} alt={item.alt} loading="lazy" />
        <figcaption>{item.alt}</figcaption>
      </figure>
    ))}
  </div>
);

export default GalleryGrid;
