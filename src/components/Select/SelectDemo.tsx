import React from "react";

import styles from "./Select.module.css";

import {
  SelectRoot,
  SelectPortal,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectLabel,
  SelectViewport,
  SelectSeparator,
  SelectScrollButton,
  SelectContent,
  SelectTrigger,
} from "./Select";
import { Check, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Label from "../Label/Label";

type DemoProps = {
  variant: "light" | "dark";
  disabled?: boolean;
  label?: string;
  id?: string;
};

const SelectDemo = ({ variant = "dark", label, id, disabled }: DemoProps) => {
  const instanceId = id ?? `id:${label}`;
  let demo;
  if (!!label) {
    demo = (
      <SelectRoot disabled={disabled}>
        <div className={styles.container}>
          <Label variant={variant} htmlFor={instanceId}>
            {label}
          </Label>
          <div style={{ width: "200px" }}>
            <SelectTrigger variant={variant} aria-label="Food" id={instanceId}>
              <SelectValue placeholder="Select a fruit…" />
            </SelectTrigger>
          </div>
        </div>
        <SelectPortal>
          <SelectContent
            variant={variant}
            position="popper"
            side="bottom"
            avoidCollisions={false}
            sideOffset={5}
          >
            <SelectScrollButton.Up variant={variant}>
              <ChevronUpIcon />
            </SelectScrollButton.Up>
            <SelectViewport variant={variant}>
              <SelectGroup>
                <SelectLabel variant={variant}>Fruits</SelectLabel>
                <SelectItem
                  variant={variant}
                  value="apple"
                  // icon={
                  //   <Check strokeWidth={1.5} absoluteStrokeWidth size={12} />
                  // }
                >
                  Apple
                </SelectItem>
                <SelectItem variant={variant} value="banana">
                  Banana
                </SelectItem>
                <SelectItem variant={variant} value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem variant={variant} value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem variant={variant} value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>

              <SelectSeparator variant={variant} />

              <SelectGroup>
                <SelectLabel variant={variant}>Vegetables</SelectLabel>
                <SelectItem variant={variant} value="aubergine">
                  Aubergine
                </SelectItem>
                <SelectItem variant={variant} value="broccoli">
                  Broccoli
                </SelectItem>
                <SelectItem variant={variant} value="carrot" disabled>
                  Carrot
                </SelectItem>
                <SelectItem variant={variant} value="courgette">
                  Courgette
                </SelectItem>
                <SelectItem variant={variant} value="leek">
                  Leek
                </SelectItem>
              </SelectGroup>

              <SelectSeparator variant={variant} />

              <SelectGroup>
                <SelectLabel variant={variant}>Meat</SelectLabel>
                <SelectItem variant={variant} value="beef">
                  Beef
                </SelectItem>
                <SelectItem variant={variant} value="chicken">
                  Chicken
                </SelectItem>
                <SelectItem variant={variant} value="lamb">
                  Lamb
                </SelectItem>
                <SelectItem variant={variant} value="pork">
                  Pork
                </SelectItem>
              </SelectGroup>
            </SelectViewport>
            <SelectScrollButton.Down variant={variant}>
              <ChevronDownIcon />
            </SelectScrollButton.Down>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    );
  } else {
    demo = (
      <SelectRoot disabled={disabled}>
        <div style={{ width: "200px" }}>
          <SelectTrigger variant={variant} aria-label="Food">
            <SelectValue placeholder="Select a fruit…" />
          </SelectTrigger>
        </div>
        <SelectPortal>
          <SelectContent
            variant={variant}
            position="popper"
            side="bottom"
            avoidCollisions={false}
            sideOffset={5}
          >
            <SelectScrollButton.Up variant={variant}>
              <ChevronUpIcon />
            </SelectScrollButton.Up>
            <SelectViewport variant={variant}>
              <SelectGroup>
                <SelectLabel variant={variant}>Fruits</SelectLabel>
                <SelectItem variant={variant} value="apple" icon={<Check />}>
                  Apple
                </SelectItem>
                <SelectItem variant={variant} value="banana">
                  Banana
                </SelectItem>
                <SelectItem variant={variant} value="blueberry">
                  Blueberry
                </SelectItem>
                <SelectItem variant={variant} value="grapes">
                  Grapes
                </SelectItem>
                <SelectItem variant={variant} value="pineapple">
                  Pineapple
                </SelectItem>
              </SelectGroup>

              <SelectSeparator variant={variant} />

              <SelectGroup>
                <SelectLabel variant={variant}>Vegetables</SelectLabel>
                <SelectItem variant={variant} value="aubergine">
                  Aubergine
                </SelectItem>
                <SelectItem variant={variant} value="broccoli">
                  Broccoli
                </SelectItem>
                <SelectItem variant={variant} value="carrot" disabled>
                  Carrot
                </SelectItem>
                <SelectItem variant={variant} value="courgette">
                  Courgette
                </SelectItem>
                <SelectItem variant={variant} value="leek">
                  Leek
                </SelectItem>
              </SelectGroup>

              <SelectSeparator variant={variant} />

              <SelectGroup>
                <SelectLabel variant={variant}>Meat</SelectLabel>
                <SelectItem variant={variant} value="beef">
                  Beef
                </SelectItem>
                <SelectItem variant={variant} value="chicken">
                  Chicken
                </SelectItem>
                <SelectItem variant={variant} value="lamb">
                  Lamb
                </SelectItem>
                <SelectItem variant={variant} value="pork">
                  Pork
                </SelectItem>
              </SelectGroup>
            </SelectViewport>
            <SelectScrollButton.Down variant={variant}>
              <ChevronDownIcon />
            </SelectScrollButton.Down>
          </SelectContent>
        </SelectPortal>
      </SelectRoot>
    );
  }

  return (
    <div
      style={{
        height: "400px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {demo}
    </div>
  );
};

export default SelectDemo;
