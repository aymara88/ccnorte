import React from 'react';

interface SwitchProps {
  id: string
  isOn: boolean;
  onToggle: (isOn: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ id, isOn, onToggle }) => {
  const handleClick = () => {
    onToggle(!isOn);
  };

  return (
    <div
      id={id}
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
