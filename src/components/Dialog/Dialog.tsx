import React from "react";
import {
  Root,
  Trigger,
  Portal,
  Overlay,
  Close,
  Content,
} from "@radix-ui/react-dialog";
import clsx from "clsx";
import styles from "./Dialog.module.css";

const Dialog = Root;
const DialogTrigger = Trigger;
const DialogPortal = Portal;
const DialogClose = Close;

const DialogOverlay = React.forwardRef<
  React.ComponentRef<typeof Overlay>,
  React.ComponentPropsWithoutRef<typeof Overlay>
>(({ className, ...props }, ref) => (
  <Overlay ref={ref} className={clsx(styles.Overlay, className)} {...props} />
));

DialogOverlay.displayName = Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay>
      <Content ref={ref} className={clsx(styles.Content, className)} {...props}>
        {children}
      </Content>
    </DialogOverlay>
  </DialogPortal>
));

DialogContent.displayName = Content.displayName;

export { Dialog, DialogClose, DialogTrigger, DialogContent };
