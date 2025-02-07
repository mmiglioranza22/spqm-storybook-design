import type { Meta, StoryObj } from "@storybook/react";
import HoverCardDemo from "./HoverCardDemo";

type Story = StoryObj<typeof HoverCardDemo>;

const meta: Meta<typeof HoverCardDemo> = {
  title: "Components/HoverCard",
  component: HoverCardDemo,
  args: {
    variant: "primary",
    sideOffset: 15,
    side: "top",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "dark", "light"],
      table: {
        type: {
          summary: "primary | dark | light",
        },
      },
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      table: {
        type: {
          summary: "top | right | bottom | left",
        },
      },
    },
    sideOffset: {
      control: "number",
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  parameters: {
    themes: {
      themeOverride: "dark",
    },
    backgrounds: {
      default: "dark-bg",
    },
  },
};

export const DarkTheme: Story = {
  args: {
    variant: "dark",
  },
  parameters: {
    themes: {
      themeOverride: "dark",
    },
  },
};

export const LightTheme: Story = {
  args: {
    variant: "light",
  },
  parameters: {
    themes: {
      themeOverride: "light",
    },
  },
};
