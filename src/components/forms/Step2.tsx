import React from 'react';
import { useFormContext } from '../../context/FormContext';

const Step2: React.FC = () => {
  const { formDataRef } = useFormContext();

  return (
    <div>
      <label>
        Dirección:
        <input
          type="text"
          defaultValue={formDataRef.current.direccion}
          onChange={(e) => (formDataRef.current.direccion = e.target.value)}
        />
      </label>
      <label>
        Ciudad:
        <input
          type="text"
          defaultValue={formDataRef.current.ciudad}
          onChange={(e) => (formDataRef.current.ciudad = e.target.value)}
        />
      </label>
    </div>
  );
};

export default Step2;
