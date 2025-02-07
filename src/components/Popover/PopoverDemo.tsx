import {
  PopoverRoot,
  PopoverPortal,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverArrow,
} from "./Popover";
import { List } from "lucide-react";

type Variant = "primary" | "light" | "dark";

type PopoverDemoProps = {
  variant: Variant;
  disabled?: boolean;
  ariaLabel?: string;
};

const PopoverDemo = ({ variant = "dark", disabled }: PopoverDemoProps) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 100,
        alignItems: "center",
        height: "150px",
      }}
    >
      <PopoverRoot>
        <PopoverTrigger asChild variant={variant} disabled={disabled}>
          <button aria-label="Status">Status</button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent variant={variant} sideOffset={5}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "100px",
              }}
            >
              Hello!
            </div>
            <PopoverClose variant={variant} aria-label="Close" />
            <PopoverArrow variant={variant} />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
      <PopoverRoot>
        <PopoverTrigger
          asChild
          variant={variant}
          disabled={disabled}
          isIcon={true}
        >
          <button aria-label="Status">
            <List />
          </button>
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent variant={variant} sideOffset={5}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 10,
                width: "100px",
              }}
            >
              Hello!
            </div>
            <PopoverClose variant={variant} aria-label="Close" />
            <PopoverArrow variant={variant} />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
    </div>
  );
};

export default PopoverDemo;
