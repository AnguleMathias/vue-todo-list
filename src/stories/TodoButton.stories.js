import TodoButton from "../components/TodoButton.vue";

export default {
  title: "Components/TodoButton",
  component: TodoButton,
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
