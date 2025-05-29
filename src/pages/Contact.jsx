import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add logic to send this data somewhere (e.g., Firebase, EmailJS)
  };

  return (
    <div className="contact container py-5">
      <h2>Sign Up / Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Name:</label>
          <input type="text" className="form-control" name="name" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" className="form-control" name="email" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Message:</label>
          <textarea className="form-control" name="message" rows="4" onChange={handleChange} required></textarea>
        </div>
        <button className="btn btn-success" type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;