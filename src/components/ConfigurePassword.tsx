interface ConfigurePasswordProps {
  passwordLength: number;
}

const ConfigurePassword = ({ passwordLength }: ConfigurePasswordProps) => {
  return (
    <div className="configure-password">
      <div className="configure-header">
        <p>Character Length</p>
        <span>{passwordLength}</span>
      </div>
    </div>
  );
};

export default ConfigurePassword;
