import TodoInput from "../components/TodoInput.vue";
import TodoButton from "../components/TodoButton.vue";

export default {
  title: "Components/TodoInput",
  component: TodoInput,
  tags: ["autodocs"],
};

export const Default = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoInput, TodoButton },
  template: `
    <TodoInput @eventAddNewTask="onAddNewTask" />
  `,
  methods: {
    onAddNewTask(taskName) {
      console.log(`New task added: ${taskName}`);
    },
  },
});

Default.args = {};
