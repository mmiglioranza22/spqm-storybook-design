import type { Meta, StoryObj } from "@storybook/react";

import ButtonDemo from "./ButtonDemo";

type Story = StoryObj<typeof ButtonDemo>;

const meta: Meta<typeof ButtonDemo> = {
  title: "Components/Button",
  component: ButtonDemo,
  args: {
    children: "Button",
    variant: "primary",
    disabled: false,
  },
  argTypes: {
    children: {
      name: "children",
      description: "Text to display on the button",
      table: {
        type: {
          detail: "string",
          summary: "string",
        },
      },
    },
    variant: {
      name: "variant",
      description: "Button variant",
      control: "select",
      options: [
        "primary",
        "secondary",
        "destructive",
        "success",
        "dark",
        "light",
      ],
      table: {
        type: {
          summary: "primary | secondary | destructive | success | dark | light",
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
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: "dark-bg",
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    disabled: false,
  },
};
export const DarkTheme: Story = {
  args: {
    variant: "dark",
    disabled: false,
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
    disabled: false,
  },
  parameters: {
    themes: {
      themeOverride: "light",
    },
  },
};
