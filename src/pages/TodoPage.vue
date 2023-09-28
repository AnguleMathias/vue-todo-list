<template>
  <TodoPageWrap>
    <TodoSection>
      <h1 class="mb-4">Todo List</h1>
      <div class="col">
        <TodoInput @eventAddNewTask="onAddNewTask" />

        <TodoList>
          <TodoListItem
            v-for="item in itemList"
            :key="item.id"
            :id="item.id"
            :text="item.text"
            :isDone="item.isDone"
            @eventTaskStatusChange="onTaskStatusChange"
            @eventTaskDelete="onTaskDelete"
          />
        </TodoList>
      </div>
    </TodoSection>
  </TodoPageWrap>
</template>

<script>
import TodoPageWrap from "@/components/TodoPageWrap.vue";
import TodoSection from "@/components/TodoSection.vue";
import TodoList from "@/components/TodoList.vue";
import TodoListItem from "@/components/TodoListItem.vue";
import TodoInput from "@/components/TodoInput.vue";

export default {
  components: {
    TodoPageWrap,
    TodoSection,
    TodoList,
    TodoListItem,
    TodoInput,
  },
  data() {
    return {
      itemList: [],
    };
  },
  methods: {
    onAddNewTask(taskName) {
      const task = {
        id: new Date().getTime(),
        text: taskName,
        isDone: false,
      };

      this.itemList.push(task);
    },
    onTaskStatusChange(id, checked) {
      let item = this.itemList.find((i) => i.id == id);
      if (item) {
        item.isDone = checked;
      }
    },
    onTaskDelete(id) {
      let index = this.itemList.findIndex((i) => i.id == id);
      if (index > -1) {
        this.itemList.splice(index, 1);
      }
    },
    loadItemList() {
      this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || [];
    },
    updateItemList() {
      localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList));
    },
  },
  mounted() {
    // Load item list from local storage
    this.loadItemList();
  },
  watch: {
    itemList: {
      handler() {
        // save to localStorage
        this.updateItemList();
      },
      deep: true,
    },
  },
};
</script>
