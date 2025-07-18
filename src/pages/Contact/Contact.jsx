import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${form.name}`);
    // You can also add logic to send the message to a server here
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your Name" onChange={handleChange} value={form.name} required />
        <input name="email" type="email" placeholder="Your Email" onChange={handleChange} value={form.email} required />
        <textarea name="message" placeholder="Your Message" onChange={handleChange} value={form.message} required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}
