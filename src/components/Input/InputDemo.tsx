import Input from "./Input";

type InputProps = {
  variant: "light" | "dark";
  label?: string;
};

const InputDemo = ({ variant = "dark", label, ...props }: InputProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Input variant={variant} label={label} {...props} />
    </div>
  );
};

export default InputDemo;
