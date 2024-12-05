import React from 'react';
import { useFormContext } from '../../context/FormContext';

const Step1: React.FC = () => {
  const { formDataRef } = useFormContext();

  return (
    <div>
      <label>
        Nombre:
        <input
          type="text"
          defaultValue={formDataRef.current.nombre}
          onChange={(e) => (formDataRef.current.nombre = e.target.value)}
        />
      </label>
      <label>
        Correo:
        <input
          type="email"
          defaultValue={formDataRef.current.correo}
          onChange={(e) => (formDataRef.current.correo = e.target.value)}
        />
      </label>
    </div>
  );
};

export default Step1;
