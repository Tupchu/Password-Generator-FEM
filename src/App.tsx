import { useState } from "react";
import "./App.css";
import ConfigurePassword from "./components/ConfigurePassword";
import GeneratedInput from "./components/GeneratedInput";

function App() {
  const [passwordLength, setPasswordLength] = useState(0);

  const updatePasswordLength = (length: number) => {
    setPasswordLength(length);
  };

  return (
    <>
      <p className="heading-md content-heading">Password Generator</p>
      <GeneratedInput generatedPassword="" />
      <ConfigurePassword
        passwordLength={passwordLength}
        updatePasswordLength={updatePasswordLength}
      />
    </>
  );
}

export default App;
