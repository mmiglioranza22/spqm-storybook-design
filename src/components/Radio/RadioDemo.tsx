import { RadioGroup, RadioItem } from "./Radio";

type RadioProps = {
  variant: "primary" | "light" | "dark";
  disabled?: boolean;
};

const RadioDemo = ({ variant = "light", disabled }: RadioProps) => {
  return (
    <RadioGroup variant={variant} disabled={disabled} defaultValue="1">
      <RadioItem variant={variant} label="first" value="1" />
      <RadioItem variant={variant} label="second" value="2" />
      <RadioItem variant={variant} label="third" value="3" />
    </RadioGroup>
  );
};

export default RadioDemo;
