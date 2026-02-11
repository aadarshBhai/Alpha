import React, { useState } from 'react';
import { getSiteInfo } from '../data';

const initialState = {
  name: '',
  phone: '',
  message: ''
};

const ContactForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const site = getSiteInfo();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setStatus(null);
  };

  const validate = () => {
    const newErrors = {};
    if (!values.name.trim()) newErrors.name = 'Name is required.';
    if (!values.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9]{10}$/.test(values.phone.trim())) {
      newErrors.phone = 'Enter a 10-digit mobile number.';
    }
    if (!values.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus(null);
      return;
    }
    setStatus('Thank you for contacting us. We will reach out soon.');
    setValues(initialState);
  };

  return (
    <div className="contact-layout">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Name *</label>
            <input
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              autoComplete="name"
              placeholder="Your Name"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone *</label>
            <input
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              autoComplete="tel"
              placeholder="Your Phone Number"
            />
            {errors.phone && <span className="field-error">{errors.phone}</span>}
          </div>
        </div>
        <div className="form-field">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={values.message}
            onChange={handleChange}
            placeholder="Your Message"
          />
          {errors.message && <span className="field-error">{errors.message}</span>}
        </div>
        <button type="submit" className="btn btn-primary">
          Send Message
        </button>
        {status && <p className="form-status">{status}</p>}
      </form>

      <div className="contact-details">
        <div className="contact-info-block">
          <h4>Email</h4>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
        </div>
        <div className="contact-info-block">
          <h4>Call</h4>
          <p>
            {site.phoneNumbers.map((p, idx) => (
              <span key={p}>
                {p}{idx < site.phoneNumbers.length - 1 ? ' , ' : ''}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
