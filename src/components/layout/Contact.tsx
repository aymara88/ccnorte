import React from "react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="section">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out with any questions or feedback.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
