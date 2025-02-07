import * as React from "react";
import { Root, Image, Fallback } from "@radix-ui/react-avatar";
import styles from "./Avatar.module.css";
import clsx from "clsx";

type VariantProps = {
  variant: "primary" | "dark" | "light";
};

type AvatarProps = VariantProps & {
  src?: string;
  fallback?: string;
  alt?: string;
};

const AvatarImage = React.forwardRef<
  React.ComponentRef<typeof Image>,
  React.ComponentPropsWithoutRef<typeof Image> & VariantProps
>(({ className, variant, alt, ...props }, ref) => {
  const imageClasses = clsx(styles.image, styles[variant], className);

  return <Image ref={ref} className={imageClasses} alt={alt} {...props} />;
});

AvatarImage.displayName = Image.displayName;

const AvatarFallback = React.forwardRef<
  React.ComponentRef<typeof Fallback>,
  React.ComponentPropsWithoutRef<typeof Fallback> & VariantProps
>(({ className, variant, ...props }, ref) => {
  const fallbackClasses = clsx(styles.fallback, styles[variant], className);

  return <Fallback ref={ref} className={fallbackClasses} {...props} />;
});

AvatarFallback.displayName = Fallback.displayName;

const WidgetAvatar = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & AvatarProps
>(({ variant, src, fallback, alt, ...props }, ref) => {
  const rootClass = clsx(styles.root, styles.widget, styles[variant]);

  return (
    <Root className={rootClass} {...props} ref={ref}>
      <AvatarImage variant={variant} src={src} alt={alt} />
      <AvatarFallback
        variant={variant}
        delayMs={300}
        style={{ fontSize: "20px" }}
      >
        {fallback}
      </AvatarFallback>
    </Root>
  );
});

WidgetAvatar.displayName = "WidgetAvatar";

const Avatar = React.forwardRef<
  React.ComponentRef<typeof Root>,
  React.ComponentPropsWithoutRef<typeof Root> & AvatarProps
>(({ className, variant, src, fallback, alt, ...props }, ref) => {
  const rootClass = clsx(styles.root, className, styles[variant]);

  return (
    <Root className={rootClass} {...props} ref={ref}>
      <AvatarImage variant={variant} src={src} alt={alt} />
      <AvatarFallback variant={variant} delayMs={300}>
        {fallback}
      </AvatarFallback>
    </Root>
  );
});

Avatar.displayName = "Avatar";

export default Avatar;

export { WidgetAvatar };
