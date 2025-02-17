import type { Meta, StoryObj } from "@storybook/react";
import RadarDemo from "./RadarDemo";

type Story = StoryObj<typeof RadarDemo>;

const meta: Meta<typeof RadarDemo> = {
  title: "Data-Visualization/Radar",
  component: RadarDemo,
  args: {
    variant: "dark",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["dark", "light"],
      table: {
        type: {
          summary: "dark | light ",
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
