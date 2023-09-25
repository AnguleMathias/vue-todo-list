import TodoButton from "../components/TodoButton.vue";

export default {
  title: "Components/TodoButton",
  component: TodoButton,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoButton },
  template: '<TodoButton v-bind="$props">Click Me</TodoButton>',
});

export const Default = Template.bind({});
Default.args = {};
