import Button from "../shared/Button"
import pencil from "../../assets/icons/pencil.png"
import book from "../../assets/icons/book.png"
import user from "../../assets/icons/user.png"
import chart from "../../assets/icons/bar-graph.png"

import FormWizardSurvey from "../sections/FormWizardSurvey"
import MarathonRoute from "../sections/MarathonRoute"
import Contact from "../sections/Contact"

function Main() {
    return (
        <main>
            <section className="button-section">
                <Button name="INSCRIBIRSE" icon={pencil} />
                <Button name="REGLAMENTO" icon={book} />
                <Button name="CONFIRMAR ASISTENCIA" icon={user} />
                <Button name="RESULTADOS" icon={chart} />
            </section>
            <section id="signup" className="section info-section">
                <p className="text-xxl">Carrera Popular NOVO MESOIRO NUEVA FECHA 15/12/2024</p>
                <p>REAPERTURA DE INSCRIPCIONES</p>
                <p>SOLICITAR DEVOLUCIONES* <span className="link">AQUÍ</span></p>
                <p>*(solo inscritos en la fecha aplazada)</p>
            </section>

            {/* Tu código aquí :) */}
            <FormWizardSurvey />
            <MarathonRoute />
            <Contact />
        </main>
    )
}

export default Main