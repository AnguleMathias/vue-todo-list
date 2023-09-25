import TodoPageWrap from "../components/TodoPageWrap.vue";

export default {
  title: "Components/TodoPageWrap",
  component: TodoPageWrap,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoPageWrap },
  template: '<TodoPageWrap v-bind="$props">Page Content</TodoPageWrap>',
});

export const Default = Template.bind({});
Default.args = {};
