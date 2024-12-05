import React, { createContext, useContext, useRef, useEffect } from 'react';

interface FormData {
  nombre: string;
  correo: string;
  direccion: string;
  ciudad: string;
}

interface FormContextProps {
  formDataRef: React.MutableRefObject<FormData>;
  currentStepRef: React.MutableRefObject<number>;
  nextStep: () => void;
  prevStep: () => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextProps | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const formDataRef = useRef<FormData>({
    nombre: '',
    correo: '',
    direccion: '',
    ciudad: '',
  });

  const currentStepRef = useRef<number>(Number(localStorage.getItem('currentStep')) || 1);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData') || '{}');
    formDataRef.current = { ...formDataRef.current, ...storedData };
  }, []);

  const saveToLocalStorage = () => {
    localStorage.setItem('formData', JSON.stringify(formDataRef.current));
    localStorage.setItem('currentStep', String(currentStepRef.current));
  };

  const nextStep = () => {
    currentStepRef.current++;
    saveToLocalStorage();
  };

  const prevStep = () => {
    currentStepRef.current = Math.max(1, currentStepRef.current - 1);
    saveToLocalStorage();
  };

  const resetForm = () => {
    formDataRef.current = {
      nombre: '',
      correo: '',
      direccion: '',
      ciudad: '',
    };
    currentStepRef.current = 1;
    localStorage.removeItem('formData');
    localStorage.removeItem('currentStep');
  };

  return (
    <FormContext.Provider
      value={{ formDataRef, currentStepRef, nextStep, prevStep, resetForm }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = (): FormContextProps => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
