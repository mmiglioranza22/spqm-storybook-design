import type { Meta, StoryObj } from "@storybook/react";
import SelectDemo from "./SelectDemo";

type Story = StoryObj<typeof SelectDemo>;

const meta: Meta<typeof SelectDemo> = {
  title: "Components/Select",
  component: SelectDemo,
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
    // type: { // Select only, Autocomplete ?
    //   control: "select",
    //   options: ["text", "password", "url", "email"],
    //   table: {
    //     type: {
    //       summary: "text | password | url | email",
    //     },
    //   },
    // },
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
