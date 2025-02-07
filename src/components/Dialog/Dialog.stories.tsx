import type { Meta, StoryObj } from "@storybook/react";
import DialogDemo from "./DialogDemo";

type Story = StoryObj<typeof DialogDemo>;

const meta: Meta<typeof DialogDemo> = {
  title: "Components/Dialog",
  component: DialogDemo,
};

export default meta;

export const Default: Story = {
  parameters: {
    backgrounds: {
      default: "dark-bg",
    },
  },
};
