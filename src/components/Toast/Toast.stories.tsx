import type { Meta, StoryObj } from "@storybook/react";
import ToastDemo from "./ToastDemo";

type Story = StoryObj<typeof ToastDemo>;

const meta: Meta<typeof ToastDemo> = {
  title: "Components/Toast",
  component: ToastDemo,
  args: {
    position: "bottom-right",
    duration: 3000,
    expand: true,
  },
  argTypes: {
    variant: {
      table: {
        disable: true,
        type: {
          // summary: "primary | dark | light | success | error",
        },
      },
    },
    position: {
      name: "position",
      control: "select",
      options: ["top-right", "bottom-right"],
      table: {
        type: {
          summary: "top-right |bottom-right",
        },
      },
    },
    duration: {
      name: "duration",
      control: "number",
      table: {
        defaultValue: {
          summary: "4000",
        },
      },
    },
    expand: {
      name: "expand",
      control: "boolean",
      table: {
        defaultValue: {
          summary: "true",
        },
      },
    },
  },
};

export default meta;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark-bg",
    },
  },
};
