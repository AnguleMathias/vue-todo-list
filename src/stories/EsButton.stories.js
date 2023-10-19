import EsButton from "../components/EsButton.vue";

export default {
  title: "Components/EsButton",
  component: EsButton,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: {},
    size: {
      control: {
        type: "select",
      },
      options: ["small", "medium", "large"],
    },
  },
};

export const Primary = {
  args: {
    primary: true,
    label: "Primary",
  },
};

export const Secondary = {
  args: {
    label: "Secondary",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "Large",
  },
};

export const Small = {
  args: {
    primary: true,
    size: "small",
    label: "Small",
  },
};
