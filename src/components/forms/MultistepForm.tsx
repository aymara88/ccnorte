import React, { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Confirmation from './Confirmation';
import '../../styles/_form.scss'

const MultistepForm: React.FC = () => {
    const { currentStepRef, formDataRef, nextStep, prevStep } = useFormContext();
    const [error, setError] = useState<string>('');

    const validateStep = (): string => {
        const { nombre, correo, direccion, ciudad } = formDataRef.current;
        if (currentStepRef.current === 1 && (!nombre || !correo)) {
            return 'Por favor, completa todos los campos del Paso 1.';
        }
        if (currentStepRef.current === 2 && (!direccion || !ciudad)) {
            return 'Por favor, completa todos los campos del Paso 2.';
        }
        return '';
    };

    const handleNext = () => {
        const validationError = validateStep();
        if (validationError) {
            setError(validationError);
        } else {
            setError('');
            nextStep();
        }
    };

    const renderStep = () => {
        switch (currentStepRef.current) {
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Confirmation />;
            default:
                return <Step1 />;
        }
    };

    return (
        <div className='form'>
            <h2>Paso {currentStepRef.current} de 3</h2>
            {renderStep()}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div style={{ marginTop: '20px' }}>
                {currentStepRef.current > 1 && <button className='form-button-prev' onClick={prevStep}>Anterior</button>}
                {currentStepRef.current < 3 && (
                    <button className='form-button-next' onClick={handleNext} style={{ marginLeft: '10px' }}>
                        Siguiente
                    </button>
                )}
            </div>
        </div>
    );
};

export default MultistepForm;
