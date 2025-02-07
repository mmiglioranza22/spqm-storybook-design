import Checkbox from "./Checkbox";

type CheckboxProps = {
  variant: "primary" | "light" | "dark";
  label?: string;
  id?: string;
  disabled?: boolean;
};

const CheckboxDemo = ({
  variant = "dark",
  label,
  id,
  ...props
}: CheckboxProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Checkbox label={label} variant={variant} id={id} {...props} />
    </div>
  );
};

export default CheckboxDemo;
