import type { Meta, StoryObj } from "@storybook/react";

import TextareaDemo from "./TextareaDemo";

type Story = StoryObj<typeof TextareaDemo>;

const meta: Meta<typeof TextareaDemo> = {
  title: "Components/Textarea",
  component: TextareaDemo,
  args: {
    variant: "dark",
    disabled: false,
    defaultValue: "Value",
    placeholder: "Placeholder",
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
    disabled: false,
  },
  parameters: {
    themes: {
      themeOverride: "light",
    },
  },
};
