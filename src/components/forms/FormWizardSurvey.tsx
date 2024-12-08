
import { useState, useMemo, useEffect } from "react";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import '../../styles/_form.scss'

import Switch from "../shared/Switch";
import Slider from "../shared/Slider";

interface FormData {
    nombre: string;
    email: string;
    fechaNacimiento: string;
    companySatisfaction: number;
    workersSatisfaction: number;
    participation: boolean;
    feedback: string;
}

const FormWizardSurvey: React.FC = () => {
    const [startIndex, setStartIndex] = useState<number>(0);
    const [resetKey, setResetKey] = useState<number>(0);

    // Initialize formData using useMemo to read from localStorage once
    const initialFormData = useMemo(() => {
        const savedData = JSON.parse(localStorage.getItem('formData') || '{}');
        return savedData && Object.keys(savedData).length > 0 ? savedData : {
            nombre: '',
            email: '',
            fechaNacimiento: '',
            companySatisfaction: 5,
            workersSatisfaction: 5,
            participation: false,
            feedback: '',
        };
    }, []);

    const [formData, setFormData] = useState<FormData>(initialFormData);

    // Save formData to localStorage whenever formData changes
    useEffect(() => {
        if (formData) {
            localStorage.setItem('formData', JSON.stringify(formData));
        }
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSliderChange = (newValue: number, satisfactionType: string) => {
        if (satisfactionType === 'companySatisfaction') {
            setFormData((prevData) => ({
                ...prevData,
                companySatisfaction: newValue,
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                workersSatisfaction: newValue,
            }));
        }
    };

    const handleToggleChange = (state: boolean) => {
        setFormData((prevData) => ({
            ...prevData,
            participation: state,
        }));
    };

    const handleComplete = () => {
        // Clear the localStorage
        localStorage.removeItem('formData');

        // Reset the formData state to its initial state
        setFormData({
            nombre: '',
            email: '',
            fechaNacimiento: '',
            companySatisfaction: 5,
            workersSatisfaction: 5,
            participation: false,
            feedback: '',
        });

        // Reset the startIndex to the first step (Step 1)
        setStartIndex(0);

        // Change the key to force re-render of the FormWizard component
        setResetKey((prevKey) => prevKey + 1);

        alert("Formulario completedado y vaciado");
    };

    const checkValidateTab0 = () => {
        return formData.nombre !== "" && formData.email !== "" && formData.fechaNacimiento !== "";
    };

    const checkValidateTab2 = () => {
        return formData.feedback !== "";
    };

    const errorMessages = () => {
        alert("Debe completar los campos requeridos");
    };

    const errorMessagesTab2 = () => {
        alert("Debe completar los campos requeridos2");
    };

    return (
        <>
            <FormWizard stepSize="xs" darkMode={true}
                key={resetKey} // Use the key to force a re-mount
                color="darkblue"
                customDarkModeColor={{
                    tab: "#6495ed", //hex color
                    tabIconColor: "#ffffff", //rgb color
                    buttons: "#000000",
                    buttonsText: "#ffffff",
                    finishButton: "#fad504",
                    finishButtonText: "#000000",
                }}
                onComplete={handleComplete} startIndex={startIndex}>
                <FormWizard.TabContent title="Datos personales" icon="ti-user">
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:<span className="required">*</span></label>
                            <input
                                type="text"
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email:<span className="required">*</span></label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="fechaNacimiento">Fecha de Nacimiento:<span className="required">*</span></label>
                            <input
                                type="date"
                                id="fechaNacimiento"
                                name="fechaNacimiento"
                                value={formData.fechaNacimiento}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent
                    title="Medida de satisfacción"
                    icon="ti-settings"
                    isValid={checkValidateTab0()}
                    validationError={errorMessages}
                >
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="nombre">Satisfacción con la organización del evento(1 a 10):<span className="required">*</span></label>
                            <Slider min={0} max={10} value={formData.companySatisfaction} onChange={(ev) => handleSliderChange(ev, 'companySatisfaction')} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="nombre">Satisfacción con el personal del evento(1 a 10):<span className="required">*</span></label>
                            <Slider min={0} max={10} value={formData.workersSatisfaction} onChange={(ev) => handleSliderChange(ev, 'workersSatisfaction')} />
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Comentario" icon="ti-check">
                    <form className="responsive-form">
                        <div className="form-group">
                            <label htmlFor="nombre">¿Volverías a participar en el evento?(Si/No):<span className="required">*</span></label>
                            <Switch isOn={formData.participation} onToggle={handleToggleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="feedback">¿Cómo podriamos mejorar?:<span className="required">*</span></label>
                            <div className="text-area-container">
                                <textarea
                                    id="feedback"
                                    name="feedback"
                                    value={formData.feedback}
                                    onChange={handleChange}
                                    placeholder='Escribe tu comentario aqui'
                                    maxLength={200}
                                    required className="text-area"
                                />
                                <p className="char-count">
                                    {formData.feedback.length}/{200} characters
                                </p>
                            </div>
                        </div>
                    </form>
                </FormWizard.TabContent>
                <FormWizard.TabContent title="Confirmación" icon="ti-check" isValid={checkValidateTab2()}
                    validationError={errorMessagesTab2}>
                    <div className="summary-container">
                        <h2>Resumen de Información</h2>
                        <div className="summary-item">
                            <strong>Nombre:</strong> <span>{formData.nombre || 'No proporcionado'}</span>
                        </div>
                        <div className="summary-item">
                            <strong>Email:</strong> <span>{formData.email || 'No proporcionado'}</span>
                        </div>
                        <div className="summary-item">
                            <strong>Fecha de Nacimiento:</strong> <span>{formData.fechaNacimiento || 'No proporcionado'}</span>
                        </div>
                        <div className="summary-item">
                            <strong>Satisfacción con la Empresa:</strong> <span>{formData.companySatisfaction}/10</span>
                        </div>
                        <div className="summary-item">
                            <strong>Satisfacción con los Compañeros:</strong> <span>{formData.workersSatisfaction}/10</span>
                        </div>
                        <div className="summary-item">
                            <strong>Participación:</strong>{' '}
                            <span>{formData.participation ? 'Sí' : 'No'}</span>
                        </div>
                        <div className="summary-item">
                            <strong>Comentarios:</strong>{' '}
                            <span>{formData.feedback || 'Sin comentarios'}</span>
                        </div>
                    </div>
                </FormWizard.TabContent>
            </FormWizard>
        </>
    );
}

export default FormWizardSurvey;