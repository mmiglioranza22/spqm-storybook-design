import * as React from "react";
import {
  Content,
  Link,
  List,
  Root,
  Trigger,
  Item,
} from "@radix-ui/react-navigation-menu";
import clsx from "clsx";

import styles from "./NavigationMenu.module.css";

type VariantProps = {
  variant: "light" | "dark";
};

const NavMenuContent = React.forwardRef<
  React.ComponentRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const contentClasses = clsx(styles.Content, styles[variant]);

  return (
    <Content className={contentClasses} ref={ref} {...props}>
      {children}
    </Content>
  );
});

NavMenuContent.displayName = Content.displayName;

type NavMenuLinkProps = VariantProps & {
  isTrigger?: boolean;
};

const NavMenuLink = React.forwardRef<
  React.ComponentRef<typeof Link>,
  React.ComponentPropsWithoutRef<typeof Link> & NavMenuLinkProps
>(({ variant, children, href, isTrigger, ...props }) => {
  // TODO: Review this is refactor phase

  const linkClasses = isTrigger
    ? clsx(styles.Trigger, styles[variant])
    : clsx(styles.Link, styles[variant]);

  return (
    <Link className={linkClasses} href={href} {...props}>
      {children}
    </Link>
  );
});

NavMenuLink.displayName = Link.displayName;

const NavMenuList = React.forwardRef<
  React.ComponentRef<typeof List>,
  React.ComponentPropsWithoutRef<typeof List> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const menuListClasses = clsx(styles.MenuList, styles[variant]);

  return (
    <List className={menuListClasses} ref={ref} {...props}>
      {children}
    </List>
  );
});

NavMenuList.displayName = List.displayName;

const NavMenu = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const rootClasses = clsx(styles.Root, styles[variant]);

  return (
    <Root className={rootClasses} ref={ref} {...props}>
      {children}
    </Root>
  );
});

NavMenu.displayName = Root.displayName;

const NavMenuTrigger = React.forwardRef<
  React.ComponentRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger> & VariantProps
>(({ variant, children, ...props }, ref) => {
  const triggerClasses = clsx(styles.Trigger, styles[variant]);

  return (
    <Trigger className={triggerClasses} ref={ref} {...props}>
      {children}
    </Trigger>
  );
});

NavMenuTrigger.displayName = Trigger.displayName;

export {
  Item as NavMenuItem,
  NavMenuTrigger,
  NavMenu,
  NavMenuList,
  NavMenuLink,
  NavMenuContent,
};
