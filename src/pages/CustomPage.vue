<template>
  <CustomPageWrap>
    <EsCard>
      <template #header>
        <h2>Sample Button</h2>
      </template>
      <EsButton
        :primary="true"
        label="Sample Button"
        type="submit"
        size="large"
      />
    </EsCard>

    <EsCard>
      <template #header>
        <h2>Sample Typography</h2>
      </template>
      <EsTypography
        variant="h1"
        color="blue"
        fontSize="24px"
        fontWeight="bold"
        content="Heading 1"
      />
      <EsTypography
        variant="h2"
        color="green"
        fontSize="20px"
        fontWeight="normal"
        content="Heading 2"
      />
      <EsTypography variant="h3" content="Heading 3" />
      <EsTypography variant="h4" content="Heading 4" />
      <EsTypography color="red" fontSize="16px" content="Regular Text" />
    </EsCard>
  </CustomPageWrap>
</template>

<script>
import CustomPageWrap from "@/components/CustomPageWrap.vue";
import EsCard from "@/components/EsCard.vue";
import EsButton from "@/components/EsButton.vue";
import EsTypography from "@/components/EsTypography.vue";

export default {
  components: {
    CustomPageWrap,
    EsButton,
    EsCard,
    EsTypography,
  },
};
</script>
