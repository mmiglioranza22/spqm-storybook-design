"use client";

import * as React from "react";
import { Root, Trigger, Content, Portal } from "@radix-ui/react-hover-card";

import clsx from "clsx";
import styles from "./HoverCard.module.css";
import RabbetBox from "../RabbetBox/RabbetBox";

type VariantProps = {
  variant: "primary" | "light" | "dark";
};

const HoverCard = Root;
const HoverCardTrigger = Trigger;
const HoverPortal = Portal;

const HoverCardContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & VariantProps
>(
  (
    {
      className,
      align = "center",
      sideOffset = 4,
      variant,
      children,
      ...props
    },
    ref
  ) => (
    <HoverPortal>
      <Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={clsx(styles.Content, styles[variant], className)}
        {...props}
      >
        <RabbetBox variant={variant}>{children}</RabbetBox>
      </Content>
    </HoverPortal>
  )
);
HoverCardContent.displayName = Content.displayName;

export { HoverCard, HoverCardTrigger, HoverCardContent };
