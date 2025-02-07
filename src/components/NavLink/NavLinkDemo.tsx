import React, { ComponentProps } from "react";
import NavLink from "./NavLink";
import Link from "next/link";

type NavLinkProps = ComponentProps<"button"> & {
  variant: "light" | "dark";
};

const NavLinkDemo = ({
  variant = "dark",
  children,
  ...props
}: NavLinkProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavLink variant={variant} {...props} asChild={true}>
        <Link href="" className="text-lg">
          {children}
        </Link>
      </NavLink>
    </div>
  );
};

export default NavLinkDemo;
