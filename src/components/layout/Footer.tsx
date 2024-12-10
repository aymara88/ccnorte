import React from 'react';
import { useTranslation } from 'react-i18next';
import facebook from '../../assets/icons/facebook.png';
import twitter from '../../assets/icons/twitter.png';
import instagram from '../../assets/icons/instagram.png';

interface FooterSectionProps {
  title: string;
  items: string[];
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, items }) => (
  <div className="footer-section">
    <h3>{title}</h3>
    {items.map((item, index) => (
      <p key={index}>{item}</p>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const sections = [
    {
      title: t('footer.information'),
      items: [
        t('footer.rules'),
        t('footer.mixedTeams'),
        t('footer.news'),
        t('footer.galleries')
      ],
    },
    {
      title: t('footer.registration'),
      items: [
        t('footer.confirmAttendance'),
        t('footer.registrationRace'),
        t('footer.registeredCircuit')
      ],
    },
    {
      title: t('footer.routes'),
      items: [
        t('footer.herculesTower2024'),
        t('footer.oza2024'),
        t('footer.sanPedro2024'),
        t('footer.osRosales2024'),
        t('footer.matograndeXuxan2024'),
        t('footer.ventorrillo2024'),
        t('footer.novoMesoiro2024')
      ],
    },
    {
      title: t('footer.results'),
      items: [
        t('footer.currentEdition'),
        t('footer.historical')
      ],
    },
    {
      title: t('footer.contact'),
      items: [],
    },
  ];

  return (
    <footer className="footer">
      {sections.map((section, index) => (
        <FooterSection key={index} title={section.title} items={section.items} />
      ))}
      <div className="footer-section social-icons">
        <img src={facebook} alt="Facebook" title="Facebook" className="icon" />
        <img src={twitter} alt="Twitter" title="Twitter" className="icon" />
        <img src={instagram} alt="Instagram" title="Instagram" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
