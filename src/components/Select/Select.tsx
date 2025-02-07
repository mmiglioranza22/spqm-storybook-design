import React from "react";
import {
  Trigger,
  Icon,
  ItemText,
  ItemIndicator,
  Content,
  Item,
  Label,
  ScrollUpButton,
  ScrollDownButton,
  Separator,
  Viewport,
  Root,
  Portal,
  Group,
  Value,
} from "@radix-ui/react-select";

import clsx from "clsx";

import styles from "./Select.module.css";
import { ChevronDownIcon } from "lucide-react";

type VariantProps = {
  variant: "light" | "dark";
};

type TriggerProps = VariantProps & {
  icon?: React.ReactNode;
};

const SelectTrigger = React.forwardRef<
  React.ComponentRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & TriggerProps
>(({ variant, children, icon, ...props }, ref) => {
  const triggerClasses = clsx(styles.trigger, styles[variant]);
  const iconClasses = clsx(styles.icon, styles[variant]);

  return (
    <Trigger className={triggerClasses} ref={ref} {...props}>
      {children}
      {icon ? (
        <Icon className={iconClasses}>{icon}</Icon>
      ) : (
        <Icon className={iconClasses}>
          <ChevronDownIcon />
        </Icon>
      )}
    </Trigger>
  );
});

SelectTrigger.displayName = Trigger.displayName;

export default SelectTrigger;

const SelectContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const className = clsx(styles.content, styles[variant]);

  return (
    <Content className={className} ref={ref} {...props}>
      {children}
    </Content>
  );
});

SelectContent.displayName = Content.displayName;

type ItemProps = VariantProps & {
  icon?: React.ReactNode;
};

const SelectItem = React.forwardRef<
  React.ComponentRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item> & ItemProps
>(({ children, variant, icon, ...props }, ref) => {
  const itemClasses = clsx(styles.item, styles[variant]);
  const indicatorClasses = clsx(styles["item-indicator"], styles[variant]);

  return (
    <Item className={itemClasses} ref={ref} {...props}>
      <ItemText>{children}</ItemText>
      {icon ? (
        <ItemIndicator className={indicatorClasses}>{icon}</ItemIndicator>
      ) : null}
    </Item>
  );
});

SelectItem.displayName = Item.displayName;

const SelectLabel = React.forwardRef<
  React.ComponentRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label> & VariantProps
>(({ variant = "dark", children, ...props }, ref) => {
  const className = clsx(styles.label, styles[variant]);

  return (
    <Label className={className} ref={ref} {...props}>
      {children}
    </Label>
  );
});
SelectLabel.displayName = Label.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ComponentRef<typeof ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof ScrollUpButton> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const className = clsx(styles["scroll-button"], styles[variant]);

  return (
    <ScrollUpButton className={className} ref={ref} {...props}>
      {children}
    </ScrollUpButton>
  );
});
SelectScrollUpButton.displayName = ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ComponentRef<typeof ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof ScrollDownButton> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const className = clsx(styles["scroll-button"], styles[variant]);

  return (
    <ScrollDownButton className={className} ref={ref} {...props}>
      {children}
    </ScrollDownButton>
  );
});

SelectScrollDownButton.displayName = ScrollDownButton.displayName;

const SelectSeparator = React.forwardRef<
  React.ComponentRef<typeof Separator>,
  React.ComponentPropsWithoutRef<typeof Separator> & VariantProps
>(({ variant, ...props }, ref) => {
  const className = clsx(styles.separator, styles[variant]);

  return <Separator className={className} ref={ref} {...props} />;
});

SelectSeparator.displayName = Separator.displayName;

type ViewportProps = {
  variant: "light" | "dark";
};

const SelectViewport = React.forwardRef<
  React.ComponentRef<typeof Viewport>,
  React.ComponentPropsWithoutRef<typeof Viewport> & ViewportProps
>(({ variant, children, ...props }, ref) => {
  const className = clsx(styles.viewport, styles[variant]);

  return (
    <Viewport className={className} ref={ref} {...props}>
      {children}
    </Viewport>
  );
});

SelectViewport.displayName = Viewport.displayName;

const SelectScrollButton = {
  Up: SelectScrollUpButton,
  Down: SelectScrollDownButton,
};
export {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectLabel,
  SelectSeparator,
  SelectViewport,
  SelectScrollButton,
  // Unmodified from radix-ui
  Root as SelectRoot,
  Portal as SelectPortal,
  Group as SelectGroup,
  Value as SelectValue,
};
