import facebook from "../../assets/icons/facebook.png"
import twiter from "../../assets/icons/twitter.png"
import instagram from "../../assets/icons/instagram.png"
import '../../styles/_footer.scss'


function Footer() {
    return (
        <footer className="footer">
            <div>
                <h3>INFORMACIÓN</h3>
                <p>REGLAMENTO</p>
                <p>EQUIPOS MIXTOS</p>
                <p>NOTICIAS</p>
                <p>GALERIAS</p>
            </div>
            <div>
                <h3>INSCRIPCIÓN</h3>
                <p>CONFIRMAR ASISTENCIA</p>
                <p>INSCRIPCIÓN CARRERA</p>
                <p>INSCRITOS CIRCUITO</p>
            </div>
            <div>
                <h3>RECORRIDOS</h3>
                <p>TORRE DE HERCULES 23/03/2024</p>
                <p>VOLTA A OZA 07/04/2024</p>
                <p>SAN PEDRO DE VISMA 12/05/2024</p>
                <p>OS ROSALES 02/06/2024</p>
                <p>MATOGRANDE-XUXÁN 15/09/2024</p>
                <p>VENTORRILLO 20/10/2024</p>
                <p>NOVO MESOIRO 15/12/2024</p>
            </div>
            <div>
                <h3>RESULTADOS</h3>
                <p>EDICIÓN ACTUAL</p>
                <p>HISTÓRICO</p>
            </div>
            <div>
                <h3>CONTACTAR</h3>
            </div>
            <div>
                <div>
                    <img src={facebook} className="icon border pad" alt="facebook" />
                </div>
                <div>
                    <img src={twiter} className="icon border pad" alt="twiter" />
                </div>
                <div>
                    <img src={instagram} className="icon border pad" alt="instagram" />
                </div>
            </div>
        </footer>
    )
}

export default Footer