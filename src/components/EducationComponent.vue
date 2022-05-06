<template>
  <article class="m-b-50 education text-right">
    <head-component name="EDUCATION"></head-component>
    <education-detail-component v-for="education in educations" :key="education.year" :education="education"></education-detail-component>
  </article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
import EducationDetailComponent from "@/components/base/EducationDetailComponent";

export default {
  name: 'EducationComponent',
  components: {
    HeadComponent,
    EducationDetailComponent
  },
  data: function () {
    return {
      educations: [{
        insName: "SRI SHAKTHI INSTITUTE OF ENGINEERING AND TECHNOLOGY",
        degree: "BE CSE - 60%",
        year: "2011-2015"
      },{
        insName: "IDEAL HR SEC SCHOOL",
        degree: "XII - 87%",
        year: "2011"
      },{
        insName: "MSN HR SEC SCHOOL",
        degree: "X - 80%",
        year: "2009"
      }]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
