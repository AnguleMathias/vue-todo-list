<template>
  <div :class="classes" :style="styles">
    {{ content }}
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    variant: {
      type: String,
      default: "text",
      validator: (value) => ["text", "h1", "h2", "h3", "h4"].includes(value),
    },
    content: {
      type: String,
      required: true,
    },
    color: String,
    fontSize: String,
    fontWeight: String,
  },

  setup(props) {
    const classes = computed(() => {
      return {
        "-es-typography": true,
        [`-es-typography--${props.variant}`]: true,
      };
    });

    const styles = computed(() => {
      return {
        color: props.color,
        fontSize: props.fontSize,
        fontWeight: props.fontWeight,
      };
    });

    return {
      classes,
      styles,
    };
  },
};
</script>

<style scoped>
.-es-typography {
  font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  margin-bottom: 0.5rem;
}

.-es-typography--text {
  font-weight: 400;
  font-size: 16px;
}

.-es-typography--h1 {
  font-weight: 700;
  font-size: 2rem;
}

.-es-typography--h2 {
  font-weight: 700;
  font-size: 1.75rem;
}

.-es-typography--h3 {
  font-weight: 700;
  font-size: 1.5rem;
}

.-es-typography--h4 {
  font-weight: 700;
  font-size: 1.25rem;
}
</style>
