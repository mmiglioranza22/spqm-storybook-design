import * as React from "react";
import clsx from "clsx";

import styles from "./NavigationMenu.module.css";
import Link from "next/link";
import {
  NavMenu,
  NavMenuContent,
  NavMenuItem,
  NavMenuLink,
  NavMenuList,
  NavMenuTrigger,
} from "./NavigationMenu";

type DemoProps = {
  variant: "light" | "dark";
  disabled?: boolean;
};
const NavigationMenuDemo = ({ variant = "dark", disabled }: DemoProps) => {
  const listItemLinkClasses = clsx(styles.ListItemLink, styles[variant]);

  return (
    <div
      style={{
        height: "350px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <NavMenu variant={variant}>
        <NavMenuList variant={variant}>
          <NavMenuItem>
            <NavMenuTrigger variant={variant} disabled={disabled}>
              Quests
            </NavMenuTrigger>
            <NavMenuContent variant={variant}>
              <ul className={`${styles.List} one`}>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Create new</p>
                    </Link>
                  </NavMenuLink>
                </li>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Tracked quests</p>
                    </Link>
                  </NavMenuLink>
                </li>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Board</p>
                    </Link>
                  </NavMenuLink>
                </li>
              </ul>
            </NavMenuContent>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuTrigger variant={variant} disabled={disabled}>
              Campaigns
            </NavMenuTrigger>
            <NavMenuContent variant={variant}>
              <ul className={`${styles.List} one`}>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Create new</p>
                    </Link>
                  </NavMenuLink>
                </li>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Log</p>
                    </Link>
                  </NavMenuLink>
                </li>
              </ul>
            </NavMenuContent>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuTrigger variant={variant} disabled={disabled}>
              Guild
            </NavMenuTrigger>
            <NavMenuContent variant={variant}>
              <ul className={`${styles.List} one`}>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Members</p>
                    </Link>
                  </NavMenuLink>
                </li>
                <li>
                  <NavMenuLink variant={variant} asChild>
                    <Link className={listItemLinkClasses} href="">
                      <p>Log</p>
                    </Link>
                  </NavMenuLink>
                </li>
              </ul>
            </NavMenuContent>
          </NavMenuItem>

          <NavMenuItem>
            <NavMenuLink variant={variant} href="" isTrigger={true}>
              Dispatches
            </NavMenuLink>
          </NavMenuItem>
        </NavMenuList>
      </NavMenu>
    </div>
  );
};

export default NavigationMenuDemo;
