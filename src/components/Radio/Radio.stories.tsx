import type { Meta, StoryObj } from "@storybook/react";
import RadioDemo from "./RadioDemo";

type Story = StoryObj<typeof RadioDemo>;

const meta: Meta<typeof RadioDemo> = {
  title: "Components/Radio",
  component: RadioDemo,
  args: {
    variant: "primary",
    disabled: false,
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
