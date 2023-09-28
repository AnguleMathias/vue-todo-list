<template>
  <form @submit="onAddNewTask">
    <div class="input-group mb-3">
      <input
        type="text"
        placeholder="What needs to be done?"
        class="form-control"
        v-model="text"
        required
      />
      <TodoButton :primary="true" label="Add" type="submit" />
    </div>
  </form>
</template>

<script>
import TodoButton from "@/components/TodoButton.vue";

export default {
  name: "TodoInput",
  components: {
    TodoButton,
  },
  data() {
    return {
      text: "",
    };
  },
  methods: {
    /**
     * Event: add new task
     */
    onAddNewTask(e) {
      e.preventDefault();
      const taskName = this.text;

      this.$emit("eventAddNewTask", taskName);

      // reset the textbox
      this.text = "";
    },
  },
};
</script>

<style scoped>
.input-group {
  position: relative;
}

.form-control {
  border: none;
  font-size: 16px;
  font-weight: normal;
  transition: all ease 400ms;
  box-shadow: 0 0 0 2px rgba(255, 140, 0, 0.7);
  margin-right: 10px;

  &:focus {
    outline: none;
    box-shadow: 0 12px 0 -6px rgba(255, 140, 0, 0.5);
    transform: translateY(-6px);
  }
}
</style>