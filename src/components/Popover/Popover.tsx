import * as React from "react";
import {
  Content,
  Trigger,
  Close,
  Arrow,
  Root as PopoverRoot,
  Portal as PopoverPortal,
} from "@radix-ui/react-popover";
import clsx from "clsx";

import styles from "./Popover.module.css";
import { X } from "lucide-react";

type Variant = "primary" | "light" | "dark";

type TriggerProps = {
  variant: Variant;
  disabled?: boolean;
  ariaLabel?: string;
  isIcon?: boolean;
};

type ContentProps = {
  variant: Variant;
};

const PopoverTrigger = React.forwardRef<
  React.ComponentRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & TriggerProps
>(({ variant, disabled, children, isIcon, ...props }, ref) => {
  const className = isIcon
    ? clsx(styles.IconButton, styles[variant])
    : clsx(styles.TriggerButton, styles[variant]);
  return (
    <Trigger className={className} disabled={disabled} ref={ref} {...props}>
      {children}
    </Trigger>
  );
});

PopoverTrigger.displayName = Trigger.displayName;

const PopoverContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & ContentProps
>(({ variant, children, ...props }, ref) => {
  const contentClasses = clsx(styles.Content, styles[variant]);

  return (
    <Content className={contentClasses} ref={ref} {...props}>
      {children}
    </Content>
  );
});

PopoverContent.displayName = Content.displayName;

const PopoverClose = React.forwardRef<
  React.ComponentRef<typeof Close>,
  React.ComponentPropsWithoutRef<typeof Close> & {
    variant: Variant;
    ariaLabel?: string;
  }
>(({ variant, ariaLabel, ...props }, ref) => {
  const closeClasses = clsx(styles.Close, styles[variant]);

  return (
    <Close className={closeClasses} aria-label={ariaLabel} ref={ref} {...props}>
      <X size={12} />
    </Close>
  );
});

PopoverClose.displayName = Close.displayName;

const PopoverArrow = React.forwardRef<
  React.ComponentRef<typeof Arrow>,
  React.ComponentPropsWithoutRef<typeof Arrow> & {
    variant: Variant;
  }
>(({ variant, ...props }, ref) => {
  const arrowClasses = clsx(styles.Arrow, styles[variant]);

  return <Arrow className={arrowClasses} ref={ref} {...props} />;
});

PopoverArrow.displayName = Arrow.displayName;

export {
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverClose,
  PopoverRoot,
  PopoverPortal,
};
