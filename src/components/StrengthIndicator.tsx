import { calculateStrength } from "../helpers/helpers";

interface StrengthIndicatorProps {
  passwordLength: number;
  options: number;
}

const StrengthIndicator = ({
  passwordLength,
  options,
}: StrengthIndicatorProps) => {
  const strength = calculateStrength(passwordLength, options);

  const getClassByStrength = (ind: number) => {
    if (strength === 4) {
      return "strength-strong";
    } else if (strength === 3 && ind <= 3) {
      return "strength-medium";
    } else if (strength === 2 && ind <= 2) {
      return "strength-weak";
    } else if (strength === 1 && ind === 1) {
      return "strength-weakest";
    }
    return "";
  };

  return (
    <div className="strength-indicator">
      <p>STRENGTH</p>
      <div>
        {[1, 2, 3, 4].map((ind) => (
          <span
            className={`indicator ${getClassByStrength(ind)}`}
            key={ind}
            data-testid="indicator"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default StrengthIndicator;
