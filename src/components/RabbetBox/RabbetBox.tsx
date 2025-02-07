import React from "react";
import clsx from "clsx";
import styles from "./RabbetBox.module.css";

type Variant =
  | "primary"
  | "dark"
  | "light"
  | "success"
  | "destructive"
  | "error";

type VariantProps = {
  variant: Variant;
  customStyle?: { readonly [key: string]: string };
};

const RabbetBox = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & VariantProps
>(({ variant, children, customStyle, ...props }, ref) => {
  const appliedStyles = customStyle ? customStyle : styles;
  return (
    <div
      className={clsx(appliedStyles.RabbetBox, appliedStyles[variant])}
      ref={ref}
      {...props}
    >
      <div
        className={clsx(appliedStyles["top-container"], appliedStyles[variant])}
      >
        <div
          className={clsx(
            appliedStyles["corner-top-left"],
            appliedStyles[variant]
          )}
        />
        <div
          className={clsx(appliedStyles["box-top"], appliedStyles[variant])}
        />
      </div>
      <div
        className={clsx(
          appliedStyles["content-container"],
          appliedStyles[variant]
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          appliedStyles["bottom-container"],
          appliedStyles[variant]
        )}
      >
        <div
          className={clsx(appliedStyles["box-bottom"], appliedStyles[variant])}
        />
        <div
          className={clsx(
            appliedStyles["corner-bottom-right"],
            appliedStyles[variant]
          )}
        />
      </div>
    </div>
  );
});

RabbetBox.displayName = "RabbetBox";

export default RabbetBox;
