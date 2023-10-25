<template>
  <EsTypography
    :variant="variant"
    :content="content"
    :color="color"
    :fontSize="fontSize"
    :fontWeight="fontWeight"
  />
</template>

<script>
import EsTypography from "./EsTypography.vue";

export default {
  components: {
    EsTypography,
  },
  props: {
    variant: String,
    content: String,
    color: String,
    fontSize: String,
    fontWeight: String,
  },
};
</script>
