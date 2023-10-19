import EsCard from "../components/EsCard.vue";

export default {
  title: "Components/EsCard",
  component: EsCard,
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
    },
  },
};

export const Default = {
  args: { header: "Card Header" },
};
