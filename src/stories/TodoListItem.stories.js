import TodoListItem from "../components/TodoListItem.vue";

export default {
  title: "Components/TodoListItem",
  component: TodoListItem,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    onClick: {},
  },
};

export const Default = {
  args: {
    id: 1,
    text: "Task 1",
    isDone: false,
  },
};

export const Done = {
  args: {
    id: 2,
    text: "Task 2",
    isDone: true,
  },
};
