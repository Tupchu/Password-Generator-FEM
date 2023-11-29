import { useState } from "react";
import "./checkbox.css";
import { type PasswordConfigOptions } from "../../../lib/types";

interface CheckboxProps {
  label: PasswordConfigOptions;
  handleCheckboxChange(checked: boolean, label: PasswordConfigOptions): void;
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
