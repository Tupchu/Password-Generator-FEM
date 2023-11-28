import { useState } from "react";
import "./App.css";
import ConfigurePassword from "./components/ConfigurePassword";
import GeneratedInput from "./components/GeneratedInput";

function App() {
  const [passwordLength, setPasswordLength] = useState(0);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const updatePasswordLength = (length: number) => {
    setPasswordLength(length);
  };

  const updateGeneratedPassword = (password: string) => {
    setGeneratedPassword(password);
  };

  return (
    <>
      <p className="heading-md content-heading">Password Generator</p>
      <GeneratedInput generatedPassword={generatedPassword} />
      <ConfigurePassword
        passwordLength={passwordLength}
        updatePasswordLength={updatePasswordLength}
        updateGeneratedPassword={updateGeneratedPassword}
      />
    </>
  );
}

export default App;
