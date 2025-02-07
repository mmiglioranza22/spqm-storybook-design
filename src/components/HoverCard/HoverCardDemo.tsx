import * as React from "react";

import styles from "./HoverCard.module.css";
import { WidgetAvatar } from "../Avatar/Avatar";
import image from "../../../public/avatarx120.jpeg";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./HoverCard";
import Link from "next/link";

type HoverCardDemoProps = {
  variant: "primary" | "dark" | "light";
  side?: "top" | "right" | "bottom" | "left";
  sideOffset?: number;
};

const HoverCardDemo = ({
  variant = "primary",
  side = "bottom",
  sideOffset = 15,
}: HoverCardDemoProps) => (
  <div
    style={{
      height: "350px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <HoverCard openDelay={100} closeDelay={150}>
      <HoverCardTrigger asChild>
        <WidgetAvatar
          variant={"primary"}
          src={image.src}
          alt={"Manuel Miglioranza"}
          fallback={"MAM"}
        />
      </HoverCardTrigger>

      <HoverCardContent
        variant={variant}
        className={styles.Content}
        sideOffset={sideOffset}
        side={side}
      >
        <p className={styles.text}>
          Full API can be checked in{" "}
          <Link href="https://www.radix-ui.com/primitives/docs/components/hover-card#api-reference">
            Radix website
          </Link>
        </p>
      </HoverCardContent>
    </HoverCard>
  </div>
);

export default HoverCardDemo;
