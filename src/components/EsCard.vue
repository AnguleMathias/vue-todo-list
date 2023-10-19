<template>
  <div class="es-card">
    <header class="es-header">
      <slot name="header"></slot>
    </header>
    <section class="es-section">
      <slot></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: "EsCard",
};
</script>

<style scoped>
.es-card {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: 10px 0;
}

.es-header {
  margin-bottom: 10px;
}

.es-section {
  padding: 5px;
}
</style>
