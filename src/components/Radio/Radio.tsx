import React from "react";
import { Root, Item, Indicator } from "@radix-ui/react-radio-group";
import styles from "./Radio.module.css";
import clsx from "clsx";
import Label from "../Label/Label";

type VariantProps = {
  variant: "primary" | "light" | "dark";
};

const RadioGroup = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const className = clsx(styles.root, styles[variant]);

  return (
    <Root className={className} ref={ref} {...props}>
      {children}
    </Root>
  );
});
RadioGroup.displayName = Root.displayName;

type RadioItemProps = VariantProps & {
  label?: string;
};

const RadioItem = React.forwardRef<
  React.ComponentRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & RadioItemProps
>(({ variant, label, id, ...props }, ref) => {
  const itemClasses = clsx(styles.item, styles[variant]);
  const indicatorClasses = clsx(styles.indicator, styles[variant]);
  const instanceId = id ?? `id:${label}`;

  if (!!label) {
    return (
      <div className={styles.container}>
        <Item className={itemClasses} id={instanceId} ref={ref} {...props}>
          <Indicator className={indicatorClasses} />
          {/* <svg
            width="20"
            height="20"
            viewBox="4 4 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.875 7.5C9.875 8.81168 8.81168 9.875 7.5 9.875C6.18832 9.875 5.125 8.81168 5.125 7.5C5.125 6.18832 6.18832 5.125 7.5 5.125C8.81168 5.125 9.875 6.18832 9.875 7.5Z"
              fill="currentColor"
            ></path>
          </svg> */}
        </Item>
        <Label variant={variant} htmlFor={instanceId}>
          {label}
        </Label>
      </div>
    );
  } else {
    return (
      <Item className={itemClasses} id={id} ref={ref} {...props}>
        <Indicator className={indicatorClasses} />
      </Item>
    );
  }
});

RadioItem.displayName = Item.displayName;

export { RadioGroup, RadioItem };
