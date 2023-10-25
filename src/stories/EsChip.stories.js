import EsChip from "../components/EsChip.vue";

export default {
  title: "Components/EsChip",
  component: EsChip,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: {
        type: "select",
      },
      options: ["text", "chips", "badges", "labels"],
    },
    content: {
      control: "text",
    },
    severity: {
      control: {
        type: "select",
      },
      options: ["critical", "severe", "high", "medium", "low"],
    },
    isFilter: {
      control: "boolean",
    },
  },
};


export const Default = {
  args: {
    variant: "chips",
    content: "Default Content",
    severity: "medium",
    isFilter: false,
    customColor: "#ffffff",
  },
};

export const FilterChip = {
  args: {
    variant: "chips",
    content: "Filter Chip",
    severity: "medium",
    isFilter: true,
    customColor: "#ffffff",
  },
};
