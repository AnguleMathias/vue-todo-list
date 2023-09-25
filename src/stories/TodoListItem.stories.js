import TodoListItem from "../components/TodoListItem.vue";

export default {
  title: "Components/TodoListItem",
  component: TodoListItem,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoListItem },
  template: '<TodoListItem v-bind="$props">Item Text</TodoListItem>',
});

export const Default = Template.bind({});
Default.args = {};
