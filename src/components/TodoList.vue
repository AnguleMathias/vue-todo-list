<template>
  <ul class="list mt-3">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "TodoList",
};
</script>

<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>