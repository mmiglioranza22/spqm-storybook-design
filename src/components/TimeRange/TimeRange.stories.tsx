import type { Meta, StoryObj } from "@storybook/react";
import TimeRangeDemo from "./TimeRangeDemo";

type Story = StoryObj<typeof TimeRangeDemo>;

const meta: Meta<typeof TimeRangeDemo> = {
  title: "Data-Visualization/TimeRange",
  component: TimeRangeDemo,
  args: {
    variant: "dark",
    from: "2018-04-01",
    to: "2018-06-31",
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
    from: {
      control: "date",
    },
    to: {
      control: "date",
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
