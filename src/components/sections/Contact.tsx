import React from "react";
import { useTranslation } from "react-i18next";
import '../../styles/_contact.scss';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contact-section section">
      <div className="contact-container">
        <h1 className="contact-title">{t('contact.title')}</h1>
        <p className="contact-description">{t('contact.description')}</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{t('contact.name')}:</label>
            <input
              type="text"
              id="name"
              name="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t('contact.email')}:</label>
            <input
              type="email"
              id="email"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">{t('contact.message')}:</label>
            <textarea
              id="message"
              name="message"
              placeholder={t('contact.messagePlaceholder')}
              rows={5}
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
