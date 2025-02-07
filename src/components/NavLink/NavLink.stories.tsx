import type { Meta, StoryObj } from "@storybook/react";

import NavLinkDemo from "./NavLinkDemo";

type Story = StoryObj<typeof NavLinkDemo>;

const meta: Meta<typeof NavLinkDemo> = {
  title: "Components/NavLink",
  component: NavLinkDemo,
  args: {
    children: "Link",
    variant: "dark",
    disabled: false,
  },
  argTypes: {
    children: {
      name: "children",
      description: "Text to display on the link",
      table: {
        type: {
          detail: "string",
          summary: "string",
        },
      },
    },
    variant: {
      name: "variant",
      description: "Link variant is bound to the selected theme",
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
