import React from "react";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import styles from "./Checkbox.module.css";
import clsx from "clsx";
import Label from "../Label/Label";

type VariantProps = {
  variant: "primary" | "light" | "dark";
  label?: string;
};

const Checkbox = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & VariantProps
>(({ variant, label, id, ...props }, ref) => {
  const checkboxClasses = clsx(styles.checkbox, styles[variant]);
  const indicatorClasses = clsx(styles.indicator, styles[variant]);
  const instanceId = id ?? `id:${label}`;

  if (!!label) {
    return (
      <div className={styles.container}>
        <Label variant={variant} htmlFor={instanceId}>
          {label}
        </Label>
        <Root className={checkboxClasses} id={instanceId} ref={ref} {...props}>
          <Indicator className={indicatorClasses}>
            <svg
              width="12"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.15587 3.93837L4.39411 7.48835L5.30325 6.57921L7.12153 4.76094L10.7581 1.12439"
                stroke={indicatorClasses}
                stroke-width="2"
              />
            </svg>
          </Indicator>
        </Root>
      </div>
    );
  } else {
    return (
      <Root className={checkboxClasses} id={id} ref={ref} {...props}>
        <Indicator className={indicatorClasses}>
          <svg
            width="12"
            height="9"
            viewBox="0 0 12 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.15587 3.93837L4.39411 7.48835L5.30325 6.57921L7.12153 4.76094L10.7581 1.12439"
              stroke={indicatorClasses}
              stroke-width="2"
            />
          </svg>
        </Indicator>
      </Root>
    );
  }
});

Checkbox.displayName = Root.displayName;

export default Checkbox;
