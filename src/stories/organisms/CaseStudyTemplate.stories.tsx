import type { Meta, StoryObj } from "@storybook/react";
import { CaseStudyTemplate } from "../../components/organisms/CaseStudyTemplate";

const meta = {
  title: "Organisms/CaseStudyTemplate",
  component: CaseStudyTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CaseStudyTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onBack: () => console.log("Back button clicked"),
    title: "Native macOS autofill for logins and passkeys",
    subtitle: "1PASSWORD • SHIPPED 2025",
    mediaUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=400&fit=crop",
    mediaAlt: "1Password macOS Interface",
    children: (
      <div>
        <h1>Case Study: Native macOS Autofill</h1>
        <p>
          This is a comprehensive case study about implementing native macOS
          autofill functionality for 1Password.
        </p>

        <section id="overview">
          <h2>Overview</h2>
          <p>
            This project involved creating a seamless autofill experience that
            integrates with macOS system behaviors.
          </p>
        </section>

        <section id="problem">
          <h2>Problem Statement</h2>
          <p>
            Users needed a way to quickly and securely fill login credentials
            without disrupting their workflow.
          </p>
        </section>

        <section id="solution">
          <h2>Solution Approach</h2>
          <p>
            We developed a native macOS integration that leverages system APIs
            for seamless autofill.
          </p>
        </section>

        <section id="process">
          <h2>Design Process</h2>
          <p>
            Our design process involved extensive user research, prototyping,
            and iterative testing.
          </p>
        </section>

        <section id="outcome">
          <h2>Outcome & Results</h2>
          <p>
            The solution achieved a 40% improvement in user satisfaction and 25%
            faster login times.
          </p>
        </section>

        <section id="learnings">
          <h2>Key Learnings</h2>
          <p>
            We learned the importance of respecting platform conventions and
            user expectations.
          </p>
        </section>
      </div>
    ),
  },
};

export const WithLongContent: Story = {
  args: {
    onBack: () => console.log("Back button clicked"),
    title: "AI-Powered Design System with Advanced Component Library",
    subtitle: "DESIGN SYSTEM • IN DEVELOPMENT",
    mediaUrl:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=400&fit=crop",
    mediaAlt: "Design System Interface",
    children: (
      <div>
        <h1>Detailed Case Study</h1>
        <p>
          This is a much longer case study with extensive content to demonstrate
          the sticky sidebar behavior.
        </p>

        {Array.from({ length: 10 }, (_, i) => (
          <section key={i} id={`section-${i}`}>
            <h2>Section {i + 1}</h2>
            <p>
              This is section {i + 1} with detailed content. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </section>
        ))}
      </div>
    ),
  },
};
