import React from 'react';
import { useFormContext } from '../../context/FormContext';

const Confirmation: React.FC = () => {
  const { formDataRef, resetForm } = useFormContext();

  const handleSubmit = () => {
    console.log('Datos enviados:', formDataRef.current);
    resetForm();
    alert('¡Formulario enviado y reiniciado!');
  };

  return (
    <div>
      <h3>Confirmar datos:</h3>
      <p>Nombre: {formDataRef.current.nombre}</p>
      <p>Correo: {formDataRef.current.correo}</p>
      <p>Dirección: {formDataRef.current.direccion}</p>
      <p>Ciudad: {formDataRef.current.ciudad}</p>
      <button onClick={handleSubmit}>Enviar</button>
    </div>
  );
};

export default Confirmation;
