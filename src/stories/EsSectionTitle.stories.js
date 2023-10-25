import EsTypography from "../components/EsTypography.vue";
import EsSectionTitle from "../components/EsSectionTitle.vue";

export default {
  title: "Components/EsSectionTitle",
  component: EsSectionTitle,
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

export const Default = (args, { argTypes }) => ({
  components: { EsTypography },
  props: Object.keys(argTypes),
  template: `
    <YourComponent
      :variant="variant"
      :content="content"
      :color="color"
      :fontSize="fontSize"
      :fontWeight="fontWeight"
    />
  `,
});

Default.args = {
  variant: "text",
  content: "This is a sample text.",
};
