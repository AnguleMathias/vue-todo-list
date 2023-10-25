import EsParagraph from "../components/EsParagraph.vue";

export default {
  title: "Components/EsParagraph",
  component: EsParagraph,
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
    variant: "text",
    content: "This is a sample paragraph",
    color: "#000000",
    fontSize: "1rem",
    fontWeight: "400",
  },
};
