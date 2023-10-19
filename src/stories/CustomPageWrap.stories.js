import CustomPageWrap from "../components/CustomPageWrap.vue";

export default {
  title: "Components/CustomPageWrap",
  component: CustomPageWrap,
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { CustomPageWrap },
  template: '<CustomPageWrap v-bind="$props">Page Content</CustomPageWrap>',
});

export const Default = Template.bind({});
Default.args = {};
