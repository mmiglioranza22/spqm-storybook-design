import React from "react";
import { Root } from "@radix-ui/react-label";
import styles from "./Label.module.css";
import clsx from "clsx";

type VariantProps = {
  variant: "primary" | "light" | "dark";
  children?: string;
  htmlFor?: string;
};

const Label = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & VariantProps
>(({ variant = "primary", children, htmlFor, ...props }, ref) => {
  const className = clsx(styles.label, styles[variant]);

  return (
    <Root className={className} htmlFor={htmlFor} ref={ref} {...props}>
      {children}
    </Root>
  );
});

Label.displayName = Root.displayName;

export default Label;
