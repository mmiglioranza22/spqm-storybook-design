import React from "react";
import { Slot } from "@radix-ui/react-slot";

import styles from "./NavLink.module.css";
import clsx from "clsx";

type NavLinkProps = {
  variant: "light" | "dark";
  asChild?: boolean;
};

const NavLink = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & NavLinkProps
>(({ variant = "dark", children, asChild, ...props }, ref) => {
  const className = clsx(styles.button, styles[variant]);
  const Tag = asChild ? Slot : "button";

  return (
    <Tag className={className} ref={ref} {...props}>
      {children}
    </Tag>
  );
});

NavLink.displayName = "NavLink";

export default NavLink;
