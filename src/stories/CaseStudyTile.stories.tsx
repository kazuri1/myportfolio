import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudyTile } from "../components/molecules/CaseStudyTile";

const meta: Meta<typeof CaseStudyTile> = {
  title: "Molecules/CaseStudyTile",
  component: CaseStudyTile,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A complete case study tile that combines Media and MediaTitle components for displaying case studies with media, title, and description.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title text",
    },
    subtitle: {
      control: "text",
      description: "The subtitle/description text",
    },
    mediaUrl: {
      control: "text",
      description: "URL to the media file (video, GIF, or image)",
    },
    mediaAlt: {
      control: "text",
      description: "Alt text for accessibility",
    },
    placeholderImage: {
      control: "text",
      description: "Placeholder image URL when no media is provided",
    },
    mediaWidth: {
      control: "text",
      description: "Width of the media container",
    },
    mediaHeight: {
      control: "text",
      description: "Height of the media container",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the case study tile",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default case study tile with placeholder image
export const Default: Story = {
  args: {
    title: "Native macOS autofill for logins and passkeys",
    subtitle: "1PASSWORD • SHIPPED 2025",
    mediaAlt: "1Password macOS Interface",
  },
};

// Case study tile with video
export const WithVideo: Story = {
  args: {
    title: "Interactive Data Visualization Dashboard",
    subtitle: "ANALYTICS PLATFORM • IN DEVELOPMENT",
    mediaUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    mediaAlt: "Interactive Dashboard Demo",
  },
};

// Case study tile with custom image
export const WithCustomImage: Story = {
  args: {
    title: "Mobile Banking App Redesign",
    subtitle: "FINANCIAL APP • COMPLETED 2024",
    placeholderImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    mediaAlt: "Mobile Banking Interface",
  },
};

// Case study tile with GIF
export const WithGif: Story = {
  args: {
    title: "AI-Powered Animation System",
    subtitle: "CREATIVE TOOLS • PROTOTYPE",
    mediaUrl: "https://media.giphy.com/media/3o7abKhOpu0NwenH3O/giphy.gif",
    mediaAlt: "AI Animation Demo",
  },
};

// Case study tile with custom dimensions
export const CustomDimensions: Story = {
  args: {
    title: "Enterprise Design System",
    subtitle: "DESIGN SYSTEM • VERSION 2.0",
    mediaWidth: "500px",
    mediaHeight: "300px",
    mediaAlt: "Design System Components",
  },
};

// Case study tile with long content
export const LongContent: Story = {
  args: {
    title:
      "Comprehensive Customer Relationship Management Platform with Advanced Analytics and Machine Learning Capabilities",
    subtitle: "ENTERPRISE CRM • LAUNCHED 2024",
    mediaAlt: "CRM Platform Interface",
  },
};

// Case study tile with click handler
export const Clickable: Story = {
  args: {
    title: "Click Me!",
    subtitle: "INTERACTIVE DEMO • TESTING",
    mediaAlt: "Interactive Demo",
    onClick: () => alert("Case study tile clicked!"),
  },
};
