import TodoList from "../components/TodoList.vue";

export default {
  title: "Components/TodoList",
  component: TodoList,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoList },
  template:
    '<TodoList v-bind="$props"><li>Item 1</li><li>Item 2</li></TodoList>',
});

export const Default = Template.bind({});
Default.args = {};
