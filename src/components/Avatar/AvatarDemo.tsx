import * as React from "react";
import Avatar, { WidgetAvatar } from "./Avatar";
import image from "../../../public/avatarx120.jpeg";

type AvatarDemoProps = {
  variant: "primary" | "dark" | "light";
};

const AvatarDemo = ({ variant = "primary" }: AvatarDemoProps) => (
  <div
    style={{ display: "flex", alignItems: "center", gap: 20, height: "200px" }}
  >
    <Avatar
      variant={variant}
      src={image.src}
      alt={"Manuel Miglioranza"}
      fallback={"MAM"}
    />
    <Avatar variant={variant} alt={"Manuel Miglioranza"} fallback={"MAM"} />

    <WidgetAvatar
      variant={variant}
      src={image.src}
      alt={"Manuel Miglioranza"}
      fallback={"MAM"}
    />
    <WidgetAvatar
      variant={variant}
      alt={"Manuel Miglioranza"}
      fallback={"MAM"}
    />
  </div>
);

export default AvatarDemo;
