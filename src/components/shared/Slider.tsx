import React from 'react';
import { useTranslation } from 'react-i18next';

interface SliderProps {
  id: string
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const Slider: React.FC<SliderProps> = ({ id, min, max, value, onChange }) => {
  const { t } = useTranslation();

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (newValue >= min && newValue <= max) {
      onChange(newValue);
    }
  };

  return (
    <div className="slider-container">
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        className="slider"
      />
      <p>{t("survey.value")}: {value}</p>
    </div>
  );
};

export default Slider;
