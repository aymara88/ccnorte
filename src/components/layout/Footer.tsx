import React from 'react';
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>INFORMACIÓN</h3>
        <p>Reglamento</p>
        <p>Equipos Mixtos</p>
        <p>Noticias</p>
        <p>Galerías</p>
      </div>
      <div className="footer-section">
        <h3>INSCRIPCIÓN</h3>
        <p>Confirmar Asistencia</p>
        <p>Inscripción Carrera</p>
        <p>Inscritos Circuito</p>
      </div>
      <div className="footer-section">
        <h3>RECORRIDOS</h3>
        <p>Torre de Hércules 23/03/2024</p>
        <p>Volta a Oza 07/04/2024</p>
        <p>San Pedro de Visma 12/05/2024</p>
        <p>Os Rosales 02/06/2024</p>
        <p>Matogrande-Xuxán 15/09/2024</p>
        <p>Ventorrillo 20/10/2024</p>
        <p>Novo Mesoiro 15/12/2024</p>
      </div>
      <div className="footer-section">
        <h3>RESULTADOS</h3>
        <p>Edición Actual</p>
        <p>Histórico</p>
      </div>
      <div className="footer-section">
        <h3>CONTACTAR</h3>
      </div>
      <div className="footer-section social-icons">
        <img src={facebook} alt="Facebook" className="icon" />
        <img src={twitter} alt="Twitter" className="icon" />
        <img src={instagram} alt="Instagram" className="icon" />
      </div>
    </footer>
  );
};

export default Footer;
