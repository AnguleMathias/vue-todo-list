import TodoList from "../components/TodoList.vue";
import TodoListItem from "../components/TodoListItem.vue";

export default {
  title: "Components/TodoList",
  component: TodoList,
  tags: ["autodocs"],
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoList, TodoListItem },
  template: `
    <TodoList v-bind="$props">
      <TodoListItem :id="1" text="Task 1" :isDone="false" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete" />
      <TodoListItem :id="2" text="Task 2" :isDone="true" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete" />
    </TodoList>
  `,
  methods: {
    onTaskStatusChange(id, isChecked) {
      console.log(`Task ${id} status changed: ${isChecked}`);
    },
    onTaskDelete(id) {
      console.log(`Task ${id} deleted`);
    },
  },
});

export const Default = Template.bind({});
Default.args = {};
