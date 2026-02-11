import React from 'react';
import Section from '../components/Section';
import { getSiteInfo, getCourses, getTestimonials, getFounder } from '../data';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  const site = getSiteInfo();
  const founder = getFounder();
  const courses = getCourses().slice(0, 2);
  const testimonials = getTestimonials().slice(0, 2);

  return (
    <>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">Admissions Open 2026</span>
            <h1 className="hero-title">{site.name}</h1>
            <p className="hero-tagline">{site.tagline}</p>
            <p className="hero-mission">{site.mission}</p>

            <div className="hero-contact">
              <div>
                <h4>Contact Now</h4>
                <p>
                  {site.phoneNumbers.map((p, idx) => (
                    <a key={p} href={`tel:${p}`} className="phone-link">
                      {p}{idx < site.phoneNumbers.length - 1 ? ' , ' : ''}
                    </a>
                  ))}
                </p>
              </div>
              <div>
                <h4>Follow On</h4>
                <div className="footer-social" style={{ marginTop: '0.5rem' }}>
                  <a href={site.social.youtube} className="social-link" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-primary)' }} target="_blank" rel="noreferrer" title="YouTube">
                    <svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                  </a>
                  <a href={site.social.facebook} className="social-link" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-primary)' }} target="_blank" rel="noreferrer" title="Facebook">
                    <svg viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  </a>
                  <a href={site.social.instagram} className="social-link" style={{ background: 'var(--color-bg-alt)', color: 'var(--color-primary)' }} target="_blank" rel="noreferrer" title="Instagram">
                    <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-branches">
              <h4>Our Branches</h4>
              <ul>
                {site.branches.map((branch) => (
                  <li key={branch.name}>
                    <strong>{branch.name}</strong> – {branch.addressLine}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="hero-founder">
            <div className="hero-founder-image-wrapper">
              <img src={founder.image} alt={founder.name} className="hero-founder-image" />
            </div>
            <div className="hero-founder-text">
              <h3>{founder.name}</h3>
              <p>{founder.title}</p>
              <p className="hero-founder-intro">{founder.intro}</p>
            </div>
          </div>
        </div>
      </section>

      <Section
        id="admissions"
        title={site.admissionOpenText}
        subtitle="Experience excellence with our structured curriculum and focused batch sizes."
        background="muted"
      >
        <div className="admission-note">
          <p style={{ fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: '500', marginBottom: '1.5rem' }}>
            Transforming aspiration into achievement.
          </p>
          <p>
            Visit our <strong>Bad Road Godari</strong> or <strong>Itimha</strong> branches to learn about our batch timings,
            tailored subject modules, and fee structures. Early admissions receive priority for batch selection.
          </p>
          <div style={{ marginTop: '2.5rem' }}>
            <a href="/contact" className="btn btn-primary">Enquire Now →</a>
          </div>
        </div>
      </Section>

      <Section
        id="mission-vision"
        title="Our Mission"
        subtitle="Building strong academic foundations through disciplined coaching and personalized attention."
      >
        <div className="mission-vision-grid">
          <div className="card mission-card">
            <h3>Our Mission</h3>
            <p>To provide disciplined, concept-driven coaching that helps students from Bihar build a strong foundation in Mathematics and Science and succeed in board as well as competitive examinations.</p>
          </div>
          <div className="card vision-card">
            <h3>Our Vision</h3>
            <p>To build a strong academic foundation for students of Bihar through disciplined coaching, personalised attention, and exam-focused practice.</p>
          </div>
        </div>
      </Section>

      <Section
        id="home-courses"
        title="Key Programs"
        subtitle="Expert coaching for Class 6th to 12th and specialized competitive exam preparation."
      >
        <div className="grid-2">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <a href="/courses" className="nav-link nav-link-primary">Explore All Courses</a>
        </div>
      </Section>

      <Section
        id="home-testimonials"
        title="Student Success"
        subtitle="Join hundreds of successful students who have excelled with ALPHA CLASSES."
        background="muted"
      >
        <div className="grid-2">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </Section>
    </>
  );
};

export default Home;
