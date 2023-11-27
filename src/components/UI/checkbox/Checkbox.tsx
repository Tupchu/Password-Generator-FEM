import { useState } from "react";
import "./checkbox.css";

interface CheckboxProps {
  label: string;
  handleCheckboxChange(checked: boolean, label: string): void;
}

const Checkbox = ({ label, handleCheckboxChange }: CheckboxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    handleCheckboxChange(!checked, label);
    setChecked((prev) => !prev);
  };

  return (
    <div className="checkbox-container">
      <input
        type="checkbox"
        id={label}
        checked={checked}
        onChange={handleChecked}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default Checkbox;
