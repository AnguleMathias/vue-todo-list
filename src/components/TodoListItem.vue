<template>
  <li class="list-item" :class="{ done: isDone }">
    <input
      type="checkbox"
      class="checkbox"
      :id="idComputed"
      @change="onTaskStatusChange"
      :checked="isDone"
    />
    <label class="mr-3" :for="idComputed"></label>
    <span class="text">{{ text }}</span>
    <span class="icon-delete" @click="onTaskDelete">x</span>
  </li>
</template>

<script>
export default {
  name: "TodoListItem",
  props: {
    id: {
      type: Number,
      default: 0,
    },
    text: {
      type: String,
      default: "",
    },
    isDone: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    idComputed() {
      return `item-${this.id}`;
    },
  },
  methods: {
    onTaskStatusChange(e) {
      const checked = e.target.checked;
      this.$emit("eventTaskStatusChange", this.id, checked);
    },
    onTaskDelete(e) {
      this.$emit("eventTaskDelete", this.id, e);
    },
  },
};
</script>

<style scoped>
.list-item {
  background-color: #f0f0f0;
  padding: 5px 10px;
  margin-bottom: 10px;
  box-shadow: 0 0 0 2px #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all ease 200ms;
}

.checkbox {
  /* display: none; */
  padding-right: 5px;
}

.checkbox + label {
  cursor: pointer;
}

.checkbox:checked + label::before {
  content: "✓";
}

.text {
  flex-grow: 1;
  margin-right: 1rem;
}

.icon-delete {
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  color: #ff8c00;
}

.icon-delete:hover {
  color: #ff0000;
}

.done {
  background-color: #000000;
  opacity: 0.2;
  color: #fff;
  text-decoration: line-through;
}
</style>
