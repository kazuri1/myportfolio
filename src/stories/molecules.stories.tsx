import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudy } from "../components/molecules/CaseStudy";

const meta: Meta<typeof CaseStudy> = {
  title: "Molecules/CaseStudy",
  component: CaseStudy,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component for displaying case studies with media, title, and description. Supports both video/GIF and image content with Pulse UI theming.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title of the case study",
    },
    description: {
      control: "text",
      description: "Description of the case study",
    },
    mediaUrl: {
      control: "text",
      description: "URL to video/GIF file (optional)",
    },
    mediaAlt: {
      control: "text",
      description: "Alt text for accessibility",
    },
    placeholderImage: {
      control: "text",
      description: "Placeholder image URL",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the case study card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic case study with placeholder image
export const Default: Story = {
  args: {
    title: "AI-Powered Design System",
    description:
      "Built a comprehensive design system that leverages machine learning to automatically generate consistent UI components and maintain brand consistency across multiple platforms.",
    mediaAlt: "AI Design System Interface",
  },
};

// Case study with video
export const WithVideo: Story = {
  args: {
    title: "Interactive Data Visualization",
    description:
      "Created an interactive dashboard that transforms complex data into intuitive visualizations, helping users make data-driven decisions in real-time.",
    mediaUrl:
      "https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4",
    mediaAlt: "Interactive Dashboard Demo",
  },
};

// Case study with custom placeholder
export const CustomImage: Story = {
  args: {
    title: "Mobile App Redesign",
    description:
      "Redesigned a mobile banking app focusing on user experience, accessibility, and modern design principles to increase user engagement by 40%.",
    placeholderImage:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    mediaAlt: "Mobile Banking App Interface",
  },
};

// Long title and description
export const LongContent: Story = {
  args: {
    title:
      "Enterprise-Level Customer Relationship Management Platform with Advanced Analytics and Machine Learning Capabilities",
    description:
      "Developed a comprehensive CRM platform that integrates customer data from multiple sources, provides advanced analytics, and uses machine learning to predict customer behavior and optimize sales strategies. The platform handles millions of customer interactions daily and provides real-time insights to sales teams across the organization.",
    mediaAlt: "CRM Platform Dashboard",
  },
};

// Minimal case study
export const Minimal: Story = {
  args: {
    title: "Simple Solution",
    description: "Sometimes the best solution is the simplest one.",
    mediaAlt: "Minimal Design",
  },
};

// Case study with click handler
export const Clickable: Story = {
  args: {
    title: "Click Me!",
    description:
      "This case study card is clickable and will trigger an action when clicked.",
    mediaAlt: "Clickable Card",
    onClick: () => alert("Case study clicked!"),
  },
};
