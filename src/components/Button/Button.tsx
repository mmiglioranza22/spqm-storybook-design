import React from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type VariantProps = {
  variant:
    | "primary"
    | "secondary"
    | "light"
    | "dark"
    | "destructive"
    | "success";
};

const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps
>(({ className, children, variant, ...props }, ref) => (
  <button
    className={clsx(styles.button, styles[variant], className)}
    ref={ref}
    {...props}
  >
    {children}
  </button>
));

Button.displayName = "Button";

export default Button;
