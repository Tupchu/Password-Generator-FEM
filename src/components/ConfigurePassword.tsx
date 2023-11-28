import Slider from "./UI/slider/Slider";
import "./components.css";
import RightIcon from "../assets/icon-arrow-right.svg";
import Checkbox from "./UI/checkbox/Checkbox";
import { useState } from "react";
import { generatePassword } from "../helpers/helpers";
import StrengthIndicator from "./StrengthIndicator";

interface ConfigurePasswordProps {
  passwordLength: number;
  updatePasswordLength(length: number): void;
  updateGeneratedPassword(password: string): void;
}

const ConfigurePassword = ({
  passwordLength,
  updatePasswordLength,
  updateGeneratedPassword,
}: ConfigurePasswordProps) => {
  const [checkedboxes, setCheckedboxes] = useState<string[]>([]);

  const handleCheckboxChange = (checked: boolean, label: string) => {
    if (checked) {
      setCheckedboxes((prev) => [...prev, label]);
    } else {
      setCheckedboxes((prev) => prev.filter((item) => item !== label));
    }
  };

  const handleGeneratePassword = () => {
    updateGeneratedPassword(generatePassword(passwordLength, checkedboxes));
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
        max={20}
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

      <StrengthIndicator
        passwordLength={passwordLength}
        options={checkedboxes.length}
      />

      <button
        className={`btn generate-btn ${
          passwordLength > 0 && checkedboxes.length > 0 ? "clickable" : ""
        }`}
        disabled={passwordLength <= 0 || checkedboxes.length === 0}
        onClick={handleGeneratePassword}
      >
        Generate <img src={RightIcon} alt="Generate password" />
      </button>
    </div>
  );
};

export default ConfigurePassword;
