import TodoSection from "../components/TodoSection.vue";

export default {
  title: "Components/TodoSection",
  component: TodoSection,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { TodoSection },
  template: '<TodoSection v-bind="$props">Section Content</TodoSection>',
});

export const Default = Template.bind({});
Default.args = {};
