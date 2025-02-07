import type { Meta, StoryObj } from "@storybook/react";

import LabelDemo from "./LabelDemo";

type Story = StoryObj<typeof LabelDemo>;

const meta: Meta<typeof LabelDemo> = {
  title: "Components/Label",
  component: LabelDemo,
  args: {
    variant: "dark",
    children: "Label",
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
    htmlFor: {
      table: {
        disable: true,
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
