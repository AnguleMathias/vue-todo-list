<template>
  <div :class="classes" :style="styles">
    {{ content }}
    <span v-if="isFilter" class="close" @click="removeFilter">x</span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    variant: {
      type: String,
      default: "text",
      validator: (value) =>
        ["text", "chips", "badges", "labels"].includes(value),
    },
    content: {
      type: String,
      required: true,
    },
    severity: String,
    isFilter: Boolean,
  },

  setup(props, { emit }) {
    const classes = computed(() => {
      return {
        chip: true,
        [`chip--${props.variant}`]: true,
        "bg-danger": props.severity === "critical",
        "bg-warning": props.severity === "severe",
        "bg-info": props.severity === "high",
        "bg-primary": props.severity === "medium",
        "bg-success": props.severity === "low",
        "border-right-0": props.isFilter,
      };
    });

    const styles = computed(() => {
      return {
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
        backgroundColor:
          props.severity === "custom" ? props.customColor : "initial",
      };
    });

    const removeFilter = () => {
      if (props.isFilter) {
        emit("remove-filter", props.content);
      }
    };

    return {
      classes,
      styles,
      removeFilter,
    };
  },
};
</script>

<style scoped>
.chip {
  display: inline-block;
  padding: 0.25rem 0.5rem;
  margin: 0.25rem;
  border-radius: 9999px;
  cursor: pointer;
}

.chip--text {
  font-weight: 400;
  font-size: 16px;
}
</style>
