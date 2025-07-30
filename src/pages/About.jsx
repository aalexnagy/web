import React from 'react';

export default function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <p>Write your personal bio here.</p>

      <h2>Contact</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
