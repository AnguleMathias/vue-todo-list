import EsSectionTitle from "../components/EsSectionTitle.vue";

export default {
  title: "Components/EsSectionTitle",
  component: EsSectionTitle,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["text", "h1", "h2", "h3", "h4"],
    },
    content: {
      control: "text",
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
    variant: "h1",
    content: "Default Section Title",
    color: "#000000",
    fontSize: "2rem",
    fontWeight: "700",
  },
};
