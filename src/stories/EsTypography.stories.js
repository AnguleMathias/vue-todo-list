import EsTypography from "../components/EsTypography.vue";

export default {
  title: "Components/EsTypography",
  component: EsTypography,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: ["text", "h1", "h2", "h3", "h4"],
      },
    },
    color: {
      control: "color",
    },
    fontSize: {
      control: "text",
    },
    fontWeight: {
      control: "text",
    },
  },
};

export const Default = {
  args: {
    variant: "text",
    color: "#000000",
    fontSize: "16px",
    fontWeight: "400",
    content: "Default Typography Content",
  },
};

export const Heading1 = {
  args: {
    variant: "h1",
    color: "#ff8c00",
    fontSize: "2rem",
    fontWeight: "700",
    content: "Heading 1",
  },
};

export const Heading2 = {
  args: {
    variant: "h2",
    color: "#007bff",
    fontSize: "1.75rem",
    fontWeight: "700",
    content: "Heading 2",
  },
};

export const Heading3 = {
  args: {
    variant: "h3",
    color: "#28a745",
    fontSize: "1.5rem",
    fontWeight: "700",
    content: "Heading 3",
  },
};

export const Heading4 = {
  args: {
    variant: "h4",
    color: "#dc3545",
    fontSize: "1.25rem",
    fontWeight: "700",
    content: "Heading 4",
  },
};
