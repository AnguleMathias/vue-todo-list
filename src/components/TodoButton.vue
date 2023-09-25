<template>
  <button class="btn" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TodoButton",
};
</script>

<style scoped>
</style>
