import React, { useState } from 'react';

interface SwitchProps {
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ isOn, onToggle }) => {
  const handleClick = () => {
    onToggle(!isOn);
  };

  return (
    <div
      className={`switch ${isOn ? 'switch--on' : 'switch--off'}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
    >
      <div className="switch__toggle"></div>
    </div>
  );
};

export default Switch;
