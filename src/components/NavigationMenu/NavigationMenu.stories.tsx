import type { Meta, StoryObj } from "@storybook/react";
import NavigationMenuDemo from "./NavigationMenuDemo";

type Story = StoryObj<typeof NavigationMenuDemo>;

const meta: Meta<typeof NavigationMenuDemo> = {
  title: "Components/NavigationMenu",
  component: NavigationMenuDemo,
  args: {
    variant: "dark",
    disabled: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["dark", "light"],
      table: {
        type: {
          summary: "dark | light",
        },
      },
    },
    disabled: {
      name: "disabled",
      control: "boolean",
      table: {
        defaultValue: {
          summary: "false",
          detail: "Defers to the built-in HTML attribute.",
        },
      },
    },
  },
};

export default meta;

export const DarkTheme: Story = {
  args: {
    variant: "dark",
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
