import type { Meta, StoryObj } from "@storybook/react";
import TableDemo from "./TableDemo";

type Story = StoryObj<typeof TableDemo>;

const meta: Meta<typeof TableDemo> = {
  title: "Components/Table",
  component: TableDemo,
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
