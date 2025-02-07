import type { Meta, StoryObj } from "@storybook/react";

import CheckboxDemo from "./CheckboxDemo";

type Story = StoryObj<typeof CheckboxDemo>;

const meta: Meta<typeof CheckboxDemo> = {
  title: "Components/Checkbox",
  component: CheckboxDemo,
  args: {
    variant: "primary",
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
    label: {
      control: "text",
      table: {
        defaultValue: {
          summary: "string",
          detail: "Optional.Value is used to link htmlFor and id attributes.",
        },
      },
    },
    id: {
      control: "text",
      table: {
        defaultValue: {
          summary: "string",
          detail: "Takes precedence over label if provided",
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
