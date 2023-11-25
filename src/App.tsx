import "./App.css";
import ConfigurePassword from "./components/ConfigurePassword";
import GeneratedInput from "./components/GeneratedInput";

function App() {
  return (
    <>
      <p className="heading-md content-heading">Password Generator</p>
      <GeneratedInput generatedPassword="" />
      <ConfigurePassword passwordLength={0} />
    </>
  );
}

export default App;
