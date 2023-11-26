import Slider from "./UI/slider/Slider";
import "./components.css";
import RightIcon from "../assets/icon-arrow-right.svg";

interface ConfigurePasswordProps {
  passwordLength: number;
  updatePasswordLength(length: number): void;
}

const ConfigurePassword = ({
  passwordLength,
  updatePasswordLength,
}: ConfigurePasswordProps) => {
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
      <button className="btn generate-btn" disabled={passwordLength <= 0}>
        Generate <img src={RightIcon} alt="Generate password" />
      </button>
    </div>
  );
};

export default ConfigurePassword;
