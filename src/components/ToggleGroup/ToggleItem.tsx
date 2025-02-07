import React from "react";
import { Item } from "@radix-ui/react-toggle-group";

import styles from "./Toggle.module.css";
import clsx from "clsx";

type ToggleItemProps = {
  variant: "primary" | "light" | "dark";
  value: string;
};

const ToggleItem = React.forwardRef<
  React.ComponentRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & ToggleItemProps
>(({ variant, value, children, ...props }, ref) => {
  const className = clsx(styles.item, styles[variant]);
  return (
    <Item className={className} value={value} ref={ref} {...props}>
      {children}
    </Item>
  );
});

ToggleItem.displayName = Item.displayName;

export default ToggleItem;
