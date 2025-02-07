import { PropsWithChildren } from "react";
import { Root } from "@radix-ui/react-toggle-group";

import styles from "./Toggle.module.css";
import clsx from "clsx";

// Component should be split in single and multiple toggle as conflicts surfaces on type checking defaultValues
// which can't be passed with spread props apparently. Discriminated unions do not seem to work to narrow this prop
// depending the type

type SingleType = {
  type: "single";
  defaultValue?: string;
};
type MultipleType = {
  type: "multiple";
  defaultValue?: string[];
};
type ToggleType = MultipleType | SingleType;

type ToggleProps = PropsWithChildren &
  ToggleType & {
    variant: "primary" | "light" | "dark";
    disabled?: boolean;
    ariaLabel?: string;
  };

const ToggleGroup = ({
  variant = "primary",
  type,
  children,
  defaultValue,
  ariaLabel,
  ...props
}: ToggleProps) => {
  const groupClasses = clsx(styles.group, styles[variant]);
  if (type === "single") {
    return (
      <Root
        className={groupClasses}
        type={"single"}
        defaultValue={defaultValue}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </Root>
    );
  }
  return (
    <Root
      className={groupClasses}
      type={"multiple"}
      defaultValue={defaultValue}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </Root>
  );
};

export default ToggleGroup;
