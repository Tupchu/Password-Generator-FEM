import "./components.css";
import CopyIcon from "../assets/icon-copy.svg";

interface GeneratedInputProps {
  generatedPassword: string;
}

const GeneratedInput = ({ generatedPassword }: GeneratedInputProps) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedPassword);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="P4$5W0rD!"
        className="generated-input heading-lg"
        disabled
        value={generatedPassword}
      />
      <img
        src={CopyIcon}
        alt="Copy generated password"
        className={generatedPassword ? "clickable" : ""}
        onClick={() => copyToClipboard()}
      />
    </div>
  );
};

export default GeneratedInput;
