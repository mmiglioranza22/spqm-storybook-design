import { createPortal } from "react-dom";
import { SyntheticEvent } from "react";
import { Toaster, toast } from "sonner";

import RabbetBox from "../RabbetBox/RabbetBox";
import Button from "../Button/Button";
import { X } from "lucide-react";
import styles from "./Toast.module.css";

type Variant = "primary" | "dark" | "light" | "success" | "error";

type ToastDemoProps = {
  variant: Variant;
  expand?: boolean;
  position?: "top-right" | "bottom-right";
  duration?: number;
  action?: () => void;
  cancel?: () => void;
};

// props for toast are position, expand, duration, action and cancel

const ToastDemo = ({
  expand = true,
  position = "bottom-right",
  duration,
}: ToastDemoProps) => {
  const handleClick = (event: SyntheticEvent, variant: Variant) => {
    toast.custom(
      (t) => {
        return (
          <RabbetBox variant={variant} customStyle={styles}>
            <p>{String(variant).toLowerCase()}</p>
            <button
              className={styles.IconButton}
              onClick={() => toast.dismiss(t)}
            >
              <X />
            </button>
          </RabbetBox>
        );
      },
      { duration: duration, unstyled: true }
    );
  };
  return (
    <div style={{ display: "flex", gap: 20 }}>
      <Button
        variant={"primary"}
        onClick={(event) => handleClick(event, "primary")}
      >
        Primary
      </Button>
      <Button variant={"dark"} onClick={(event) => handleClick(event, "dark")}>
        Dark
      </Button>
      <Button
        variant={"light"}
        onClick={(event) => handleClick(event, "light")}
      >
        Light
      </Button>
      <Button
        variant={"success"}
        onClick={(event) => handleClick(event, "success")}
      >
        Success
      </Button>
      <Button
        variant={"destructive"}
        onClick={(event) => handleClick(event, "error")}
      >
        Error
      </Button>
      {/* TODO: line overflow container */}
      {createPortal(
        <Toaster expand={expand} position={position} />,
        document.body
      )}
    </div>
  );
};

export default ToastDemo;
