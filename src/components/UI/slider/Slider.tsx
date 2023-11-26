import "./slider.css";
import { InputHTMLAttributes } from "react";

interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  updatePasswordLength(length: number): void;
  passwordLength: number;
}
const Slider = ({
  updatePasswordLength,
  passwordLength,
  ...props
}: SliderProps) => {
  return (
    <input
      type="range"
      {...props}
      onChange={(e) => updatePasswordLength(e.target.valueAsNumber)}
      value={passwordLength}
      className="slider"
    />
  );
};

export default Slider;
