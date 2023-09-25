<template>
  <TodoPageWrap>
    <TodoSection>
      <h1 class="mb-4">Todo List</h1>
      <form @submit.prevent="addTodo">
        <div class="input-group mb-3">
          <input
            type="text"
            v-model="newTodo"
            class="form-control"
            placeholder="New Todo Item"
            required
          />
          <button type="submit" class="btn btn-primary">Add</button>
        </div>
      </form>
      <TodoList>
        <TodoListItem v-for="(todo, index) in todos" :key="index">
          {{ todo }}
        </TodoListItem>
      </TodoList>
    </TodoSection>
  </TodoPageWrap>
</template>

<script>
import TodoPageWrap from "../components/TodoPageWrap.vue";
import TodoSection from "../components/TodoSection.vue";
import TodoList from "../components/TodoList.vue";
import TodoListItem from "../components/TodoListItem.vue";

export default {
  components: {
    TodoPageWrap,
    TodoSection,
    TodoList,
    TodoListItem,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo);
        this.newTodo = "";
      }
    },
  },
};
</script>
