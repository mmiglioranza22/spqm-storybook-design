import React from "react";

import styles from "./Textarea.module.css";
import clsx from "clsx";
import Label from "../Label/Label";

type VariantProps = {
  variant: "light" | "dark";
  label?: string;
  id?: string;
};

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & VariantProps
>(({ variant = "dark", label, id, ...props }, ref) => {
  const className = clsx(styles.textarea, styles[variant]);
  const instanceId = id ?? `id:${label}`;

  if (!!label) {
    return (
      <div className={styles.container}>
        <Label variant={variant} htmlFor={instanceId}>
          {label}
        </Label>
        <textarea className={className} id={instanceId} ref={ref} {...props} />
      </div>
    );
  } else {
    return <textarea className={className} id={id} ref={ref} {...props} />;
  }
});

Textarea.displayName = "Textarea";

export default Textarea;
