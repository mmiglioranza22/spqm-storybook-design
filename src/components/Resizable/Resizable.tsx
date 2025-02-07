"use client";

import { GripVertical } from "lucide-react";
import { PanelGroup, Panel, PanelResizeHandle } from "react-resizable-panels";

import clsx from "clsx";
import styles from "./Resizable.module.css";

type VariantProps = {
  variant: "light" | "dark";
};

const ResizablePanelGroup = ({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof PanelGroup> & VariantProps) => {
  return (
    <PanelGroup
      className={clsx(styles.ResizablePanelGroup, styles[variant], className)}
      {...props}
    />
  );
};

const ResizablePanel = ({
  variant,
  className,
  ...props
}: React.ComponentProps<typeof Panel> & VariantProps) => {
  return (
    <Panel
      className={clsx(styles.ResizablePanel, styles[variant], className)}
      {...props}
    />
  );
};

const ResizableHandle = ({
  variant,
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean;
} & VariantProps) => {
  return (
    <PanelResizeHandle
      className={clsx(styles.ResizableHandle, styles[variant], className)}
      {...props}
    >
      {withHandle && (
        <div className={clsx(styles["grip-container"], styles[variant])}>
          <GripVertical className={clsx(styles.Grip, styles[variant])} />
        </div>
      )}
    </PanelResizeHandle>
  );
};

export { ResizablePanelGroup, ResizablePanel, ResizableHandle };
