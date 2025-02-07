import ToggleItem from "./ToggleItem";
import ToggleGroup from "./ToggleGroup";

type Variant = "primary" | "light" | "dark";

type ToggleProps = {
  variant: Variant;
  disabled?: boolean;
  ariaLabel?: string;
};

// Toggle and ToggleItem should hook to context to read the variant to avoid prop drilling,
// making this a client rendered component.
// ? Maybe add dynamic dark check in className on each component, or :dark pseudoclass in css? how does tailwind solve this?
// TODO: test with application eventually
const ToggleDemo = ({
  variant = "primary",
  ariaLabel,
  ...props
}: ToggleProps) => {
  return (
    <div
      style={{
        height: "200px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <ToggleGroup
        type="single"
        defaultValue={"FR"}
        ariaLabel={ariaLabel}
        variant={variant}
        {...props}
      >
        <ToggleItem
          value="ES"
          aria-label="Español"
          variant={variant}
          {...props}
        >
          ESP
        </ToggleItem>
        <ToggleItem
          value="EN"
          aria-label="English"
          variant={variant}
          {...props}
        >
          ENG
        </ToggleItem>
        <ToggleItem
          value="FR"
          aria-label="Français"
          variant={variant}
          {...props}
        >
          FRA
        </ToggleItem>
      </ToggleGroup>
    </div>
  );
};

export default ToggleDemo;
