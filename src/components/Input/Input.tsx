import React from "react";

import styles from "./Input.module.css";
import clsx from "clsx";
import Label from "../Label/Label";

type VariantProps = {
  variant: "light" | "dark";
  label?: string;
  id?: string;
};

const Input = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & VariantProps
>(({ variant, label, id, ...props }, ref) => {
  const className = clsx(styles.input, styles[variant]);
  const instanceId = id ?? `id:${label}`;

  if (!!label) {
    return (
      <div className={styles.container}>
        <Label variant={variant} htmlFor={instanceId}>
          {label}
        </Label>
        <input className={className} id={instanceId} ref={ref} {...props} />
      </div>
    );
  } else {
    return <input className={className} id={id} ref={ref} {...props} />;
  }
});

Input.displayName = "Input";

export default Input;
