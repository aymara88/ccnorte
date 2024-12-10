import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import Swal from 'sweetalert2';
import '../../styles/_contact.scss';

const Contact: React.FC = () => {
  const { t } = useTranslation();


  // Refs for form inputs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  // Submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Retrieve values from refs
    const name = nameRef.current?.value.trim();
    const email = emailRef.current?.value.trim();
    const message = messageRef.current?.value.trim();

    // Validate inputs
    if (!name) {
      Swal.fire({
        text: t("contact.validation.nameRequired"),
        position: "top",
        width: 300,
        showConfirmButton: false, // Hide the OK button
        timer: 2000, // Auto-close after 1.5 seconds
        timerProgressBar: true,
        backdrop: false,
        customClass: {
          popup: 'small-alert-error',
        }
      });

      return;
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      Swal.fire({
        text: t("contact.validation.validEmailRequired"),
        position: "top",
        width: 300,
        showConfirmButton: false, // Hide the OK button
        timer: 2000, // Auto-close after 1.5 seconds
        timerProgressBar: true,
        backdrop: false,
        customClass: {
          popup: 'small-alert-error',
        }
      });
      return;
    }

    if (!message) {
      Swal.fire({
        text: t("contact.validation.messageRequired"),
        position: "top",
        width: 300,
        showConfirmButton: false, // Hide the OK button
        timer: 2000, // Auto-close after 1.5 seconds
        timerProgressBar: true,
        backdrop: false,
        customClass: {
          popup: 'small-alert-error',
        }
      });
      return;
    }

    // Success
    Swal.fire({
      text: t("contact.successMessage"),
      position: "top",
      width: 300,
      showConfirmButton: false, // Hide the OK button
      timer: 2000, // Auto-close after 1.5 seconds
      timerProgressBar: true,
      backdrop: false,
      customClass: {
          popup: 'small-alert-success',
      }
  });

    // Clear fields
    if (nameRef.current) nameRef.current.value = "";
    if (emailRef.current) emailRef.current.value = "";
    if (messageRef.current) messageRef.current.value = "";
  };

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <p className="contact-description">{t('contact.description')}</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}:</label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}:</label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}:</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              rows={5}
              ref={messageRef}
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            {t('buttons.submit')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
