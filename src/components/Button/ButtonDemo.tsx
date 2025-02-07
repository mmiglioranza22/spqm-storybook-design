import { ComponentProps } from "react";
import Button from "./Button";

type ButtonProps = ComponentProps<"button"> & {
  variant:
    | "primary"
    | "secondary"
    | "light"
    | "dark"
    | "destructive"
    | "success";
};

const ButtonDemo = ({
  variant = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button variant={variant} {...props}>
      <span className="text-md font-bold">{children}</span>
    </Button>
  );
};

export default ButtonDemo;
