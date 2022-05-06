<template>
  <section id="#maincontent">
    <div class="flex-row div-main">
      <div class="div-left">
        <contact-component></contact-component>
        <education-component></education-component>
        <skill-set-component></skill-set-component>
        <other-works-component></other-works-component>
      </div>
      <div class="div-right">
        <career-objective></career-objective>
        <professional-experience></professional-experience>
      </div>
    </div>
    <div class="download" @click="print()">
      <img src="@/assets/icons/download.svg"/>
    </div>
  </section>
</template>

<script>
import ContactComponent from "@/components/ContactComponent";
import EducationComponent from "@/components/EducationComponent";
import SkillSetComponent from "@/components/SkillSetComponent";
import OtherWorksComponent from "@/components/Other/OtherWokrsComponent";
import CareerObjective from "@/components/CareerObjective";
import ProfessionalExperience from "@/components/Professional/ProfessionalExperience";

export default {
  name: 'MainComponent',
  components: {
    ProfessionalExperience,
    CareerObjective,
    OtherWorksComponent,
    SkillSetComponent,
    ContactComponent,
    EducationComponent
  },
  methods: {
    print: function() {
      window.print();
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables/variables";

div-main {
  padding: 70px 0px 30px 0px;
  display: flex;
}

.download {
  width: 70px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  cursor: pointer;
}

@media print {
  .download {
    display: none !important;
  }
}

</style>
