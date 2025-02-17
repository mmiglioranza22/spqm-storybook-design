import type { Meta, StoryObj } from "@storybook/react";
import CalendarDemo from "./CalendarDemo";

type Story = StoryObj<typeof CalendarDemo>;

const meta: Meta<typeof CalendarDemo> = {
  title: "Data-Visualization/Calendar",
  component: CalendarDemo,
  args: {
    variant: "dark",
    from: "2015-03-01",
    to: "2015-07-12",
    spaceMonths: false,
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
    spaceMonths: {
      control: "boolean",
      table: {
        defaultValue: {
          summary: "false",
          detail: "Default spacing is 15px, modifiable in the implementation",
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
