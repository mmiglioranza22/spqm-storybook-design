import type { Meta, StoryObj } from "@storybook/react";

import InputDemo from "./InputDemo";

type Story = StoryObj<typeof InputDemo>;

const meta: Meta<typeof InputDemo> = {
  title: "Components/Input",
  component: InputDemo,
  args: {
    variant: "dark",
    disabled: false,
    defaultValue: "Value",
    placeholder: "Placeholder",
    type: "text",
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
    type: {
      control: "select",
      options: ["text", "password", "url", "email"],
      table: {
        type: {
          summary: "text | password | url | email",
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

export const DarkTheme: Story = {
  args: {
    variant: "dark",
    disabled: false,
  },
  parameters: {
    backgrounds: {
      default: "dark-bg",
    },
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
