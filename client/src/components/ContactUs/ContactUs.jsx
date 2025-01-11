import React, { useState } from 'react';
import './ContactUs.css'; // Custom CSS for styling

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trek: '',
    phone: '',
    message: ''
  });

  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionStatus('Sending...');

    const payload = {
      access_key: 'e86278b8-7b0e-42ea-9753-cf8348395a2a',
      ...formData
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          trek: '',
          phone: '',
          message: ''
        });
        setSubmissionStatus('Message sent successfully!');
      } else {
        setSubmissionStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmissionStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-header">Contact Details</h2>
        <p className="contact-subheader">
          Feel free to reach out to us with any questions or inquiries. Our team is here to assist you and will respond as quickly as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="custom-input"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="custom-input"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="trek"
              value={formData.trek}
              onChange={handleInputChange}
              placeholder="Trek"
              className="custom-input"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone No"
              className="custom-input"
              required
            />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            className="custom-textarea"
            rows="4"
            required
          ></textarea>
          <button type="submit" className="submit-btn">
            SEND MESSAGE
          </button>
        </form>
        {submissionStatus && <p className="submission-status">{submissionStatus}</p>}
      </div>
    </div>
  );
};

export default ContactUs;
