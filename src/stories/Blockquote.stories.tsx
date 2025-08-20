import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "../components/atoms/Blockquote";

const meta = {
  title: "Atoms/Blockquote",
  component: Blockquote,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "This case study will focus on my work on macOS native compatibility for the core autofill product!",
  },
};

export const LongText: Story = {
  args: {
    children:
      "This is a longer blockquote example that demonstrates how the component handles multiple lines of text while maintaining the clean, professional appearance with the vertical grey line on the left side.",
  },
};

export const WithCustomContent: Story = {
  args: {
    children:
      "Important information that needs to be highlighted and brought to the user's attention in a visually distinct way.",
  },
};
