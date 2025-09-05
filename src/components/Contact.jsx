
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_ema0k2o';
    const templateID = 'template_t6w3oq5';
    const userID = '8Ivxr6OHnfphsF6_T';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message, please try again later.');
      });
  };

  return (
    <section id="contact" className="contact-section-modern">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title-modern">Get In Touch</h2>
          <p className="contact-subtitle-modern">
            Feel free to reach out for opportunities, collaborations, or just to say hello!
          </p>
        </div>

        <div className="contact-cards-grid">
          {/* Contact Information Card */}
          <div className="contact-info-card enhanced">
            <div className="card-header-enhanced">
              <span className="card-icon-large">💬</span>
              <h3 className="card-title">Contact Information</h3>
              <p className="card-subtitle">Ready to connect? Choose your preferred way</p>
            </div>
            
            <div className="contact-info-item-enhanced">
              <div className="contact-info-icon email-icon">
                <span>📧</span>
              </div>
              <div className="contact-info-content">
                <h4>Email</h4>
                <p>sampannaghimire537@gmail.com</p>
                <a 
                  href="mailto:sampannaghimire537@gmail.com" 
                  className="contact-action-btn"
                  aria-label="Send email to Sampanna"
                >
                  Send Email
                </a>
              </div>
            </div>

            <div className="contact-info-item-enhanced">
              <div className="contact-info-icon phone-icon">
                <span>📞</span>
              </div>
              <div className="contact-info-content">
                <h4>Phone</h4>
                <p>+977 9746421425</p>
                <a 
                  href="tel:+9779746421425" 
                  className="contact-action-btn"
                  aria-label="Call Sampanna"
                >
                  Call Now
                </a>
              </div>
            </div>

            <div className="contact-info-item-enhanced">
              <div className="contact-info-icon location-icon">
                <span>📍</span>
              </div>
              <div className="contact-info-content">
                <h4>Location</h4>
                <p>Kathmandu, Nepal</p>
                <span className="location-badge">GMT +5:45</span>
              </div>
            </div>

            <div className="contact-availability">
              <div className="availability-indicator">
                <span className="status-dot available"></span>
                <span>Available for opportunities</span>
              </div>
            </div>
          </div>

          {/* Social Media Card */}
          <div className="contact-info-card">
            <h3 className="card-title">Social Media</h3>
            
            <div className="social-media-links-compact">
              <a href="https://www.instagram.com/sampanna_gh/" className="social-media-link instagram" target="_blank" rel="noopener noreferrer">
                <span>📷</span>
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/sampanna.ghimire.2025" className="social-media-link facebook" target="_blank" rel="noopener noreferrer">
                <span>📘</span>
                <span>Facebook</span>
              </a>
            </div>
            
            <p className="social-media-description">
              Follow me on social media to stay updated with my latest projects and learning journey!
            </p>
          </div>

          {/* Let's Connect Card */}
          <div className="contact-info-card">
            <h3 className="card-title">Let's Connect</h3>
            <p className="connect-description">
              I'm always interested in learning opportunities, internships, and connecting with fellow developers. Whether you have a project idea, want to collaborate, or just want to chat about technology, I'd love to hear from you!
            </p>
          </div>

          {/* Send Message Form */}
          <div className="contact-form-card">
            <h3 className="card-title">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="contact-form-modern">
              <div className="form-row-modern">
                <div className="form-group-modern">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                  />
                </div>
                <div className="form-group-modern">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    required
                  />
                </div>
              </div>

              <div className="form-group-modern">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className="form-group-modern">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="send-message-btn">
                <span>✈️</span>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
