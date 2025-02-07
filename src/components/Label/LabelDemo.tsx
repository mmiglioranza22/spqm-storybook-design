import Label from "./Label";

type LabelDemoProps = {
  variant: "primary" | "light" | "dark";
  children?: string;
  htmlFor?: string;
};

const LabelDemo = ({
  variant = "primary",
  children,
  htmlFor,
  ...props
}: LabelDemoProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Label variant={variant} htmlFor={htmlFor} {...props}>
        {children}
      </Label>
    </div>
  );
};

export default LabelDemo;
