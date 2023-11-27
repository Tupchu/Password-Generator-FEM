import Slider from "./UI/slider/Slider";
import "./components.css";
import RightIcon from "../assets/icon-arrow-right.svg";
import Checkbox from "./UI/checkbox/Checkbox";
import { useState } from "react";

interface ConfigurePasswordProps {
  passwordLength: number;
  updatePasswordLength(length: number): void;
}

const ConfigurePassword = ({
  passwordLength,
  updatePasswordLength,
}: ConfigurePasswordProps) => {
  const [checkedboxes, setCheckedboxes] = useState<string[]>([]);

  const handleCheckboxChange = (checked: boolean, label: string) => {
    if (checked) {
      setCheckedboxes((prev) => [...prev, label]);
    } else {
      setCheckedboxes((prev) => prev.filter((item) => item !== label));
    }
  };

  return (
    <div className="configure-password">
      <div className="configure-header">
        <p>Character Length</p>
        <span>{passwordLength}</span>
      </div>
      <Slider
        updatePasswordLength={updatePasswordLength}
        passwordLength={passwordLength}
        step={1}
        min={0}
        max={10}
      />

      <div className="options">
        <Checkbox
          label="Include Uppercase Letters"
          handleCheckboxChange={handleCheckboxChange}
        />
        <Checkbox
          label="Include Lowercase Letters"
          handleCheckboxChange={handleCheckboxChange}
        />
        <Checkbox
          label="Include Numbers"
          handleCheckboxChange={handleCheckboxChange}
        />
        <Checkbox
          label="Include Symbols"
          handleCheckboxChange={handleCheckboxChange}
        />
      </div>

      <button
        className={`btn generate-btn ${
          passwordLength > 0 && checkedboxes.length > 0 ? "clickable" : ""
        }`}
        disabled={passwordLength <= 0 || checkedboxes.length === 0}
      >
        Generate <img src={RightIcon} alt="Generate password" />
      </button>
    </div>
  );
};

export default ConfigurePassword;
