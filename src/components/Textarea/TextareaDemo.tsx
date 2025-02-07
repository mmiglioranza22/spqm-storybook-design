import Textarea from "./Textarea";

type TextareaProps = {
  variant: "light" | "dark";
  label?: string;
};

const TextareaDemo = ({ variant, label, ...props }: TextareaProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Textarea variant={variant} label={label} {...props} />
    </div>
  );
};

export default TextareaDemo;
