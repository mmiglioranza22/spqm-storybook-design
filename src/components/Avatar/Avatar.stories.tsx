import type { Meta, StoryObj } from "@storybook/react";

import AvatarDemo from "./AvatarDemo";

type Story = StoryObj<typeof AvatarDemo>;

const meta: Meta<typeof AvatarDemo> = {
  title: "Components/Avatar",
  component: AvatarDemo,
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
  },
};

export default meta;

export const Primary: Story = {
  args: {
    variant: "primary",
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
