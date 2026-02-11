import React from 'react';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <>
      <Section
        id="contact"
        title="Contact Us"
        subtitle="Reach out for admissions, batch details or counselling."
      >
        <ContactForm />
      </Section>

      <Section background="muted">
        <div className="map-wrapper">
          <h3 className="section-subtitle">Institute Location (Sample)</h3>
          <div className="map-embed">
            <iframe
              title="The ALPHA CLASSES location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28755.15141000216!2d83.883!3d24.94!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398db4c0f57e4a4d%3A0x2e5f0e2f1b3f2d4!2sRohtas%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="map-note">
            Map location is indicative. Update with the exact location of your branches.
          </p>
        </div>
      </Section>
    </>
  );
};

export default Contact;
