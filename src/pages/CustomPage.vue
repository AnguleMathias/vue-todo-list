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

    <EsCard>
      <template #header>
        <h2>Chips</h2>
      </template>
      <EsChip variant="chips" content="Critical" severity="critical" />
      <EsChip variant="chips" content="Severe" severity="severe" />
      <EsChip variant="badges" content="High" severity="high" />
      <EsChip variant="badges" content="Medium" severity="medium" />
      <EsChip variant="labels" content="Low" severity="low" />

      <!-- Filter Chips -->
      <EsChip
        v-for="(filter, index) in filters"
        :key="index"
        :content="filter"
        :isFilter="true"
        :customColor="filterColors[index]"
        @remove-filter="removeFilter"
      />
    </EsCard>

    <EsCard>
      <template #header>
        <h2>Sections</h2>
      </template>
      <EsSectionTitle
        variant="h1"
        content="This is a Section Title"
        color="#333"
        fontSize="2rem"
        fontWeight="700"
      />
      <EsParagraph
        variant="text"
        content="This is a section paragraph"
        color="#666"
        fontSize="16px"
        fontWeight="400"
      />
    </EsCard>
  </CustomPageWrap>
</template>

<script>
import CustomPageWrap from "@/components/CustomPageWrap.vue";
import EsCard from "@/components/EsCard.vue";
import EsChip from "@/components/EsChip.vue";
import EsButton from "@/components/EsButton.vue";
import EsParagraph from "@/components/EsParagraph.vue";
import EsSectionTitle from "@/components/EsSectionTitle.vue";
import EsTypography from "@/components/EsTypography.vue";

export default {
  components: {
    CustomPageWrap,
    EsButton,
    EsCard,
    EsChip,
    EsParagraph,
    EsSectionTitle,
    EsTypography,
  },
  data() {
    return {
      filters: ["Filter 1", "Filter 2", "Filter 3"],
      filterColors: ["#339CAE", "#40C3D9", "#339CAE"],
    };
  },
  methods: {
    removeFilter(filter) {
      this.filters = this.filters.filter((f) => f !== filter);
      this.filterColors.splice(this.filters.indexOf(filter), 1); // Remove the corresponding color when filter is removed
    },
  },
};
</script>
