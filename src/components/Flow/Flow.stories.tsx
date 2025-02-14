import type { Meta, StoryObj } from "@storybook/react";
import FlowDemo from "./FlowDemo";

type Story = StoryObj<typeof FlowDemo>;

const meta: Meta<typeof FlowDemo> = {
  title: "Components/Flow",
  component: FlowDemo,
  args: {
    variant: "dark",
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
