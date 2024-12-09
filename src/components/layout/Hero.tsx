import hero from "../../assets/hero-text.png";
import "../../styles/_hero.scss";

function Hero() {
    return (
        <>
            <section className="hero">
                <div className="hero-image">
                    <img src={hero} alt="Hero" />
                </div>

                <div className="hero-container">
                    <div className="date-box">TORRE DE HERCULES 23/03/2024</div>
                    <div className="date-box">VOLTA A OZA 07/04/2024</div>
                    <div className="date-box">SAN PEDRO DE VISMA 12/05/2024</div>
                    <div className="date-box">OS ROSALES 02/06/2024</div>
                    <div className="date-box">MATOGRANDE-XUXÁN 15/09/2024</div>
                    <div className="date-box">VENTORRILLO 20/10/2024</div>
                    <div className="date-box">NOVO MESOIRO 15/12/2024</div>
                </div>
            </section>
            <section className="hero-footer">
                XI CIRCUITO DE CARREIRAS POPULARES CORUÑA CORRE 2024
            </section>
        </>
    );
}

export default Hero;
