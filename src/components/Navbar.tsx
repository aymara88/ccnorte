import logo from "../assets/logo.png"
import es from "../assets/es.png"
import gl from "../assets/gl.png"

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
            </div>

            <ul className="navbar-links">
                <li><a href="#">EVENTOS</a></li>
                <li><a href="#">INFORMACIÓN</a></li>
                <li><a href="#">INSCRIPCIÓN</a></li>
                <li><a href="#">RECORRIDOS</a></li>
                <li><a href="#">RESULTADOS</a></li>
                <li><a href="#">CONTACTAR</a></li>
            </ul>

            <div className="navbar-images">
                <img src={es} alt="Image 1" className="navbar-image border" />
                <img src={gl} alt="Image 2" className="navbar-image border" />
            </div>
        </nav>
    )
}

export default Navbar