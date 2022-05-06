<template>
  <article class="m-b-50 education text-right">
    <head-component name="KEY SKILLS"></head-component>
    <skill-component v-for="skill in skills" :key="skill.name" :skill="skill"></skill-component>
  </article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
import SkillComponent from "@/components/base/SkillComponent";

export default {
  name: 'SkillSetComponent',
  components: {
    HeadComponent,
    SkillComponent
  },
  data: function() {
    return {
      skills: [{
        name: "HTML",
        icon: require("@/assets/icons/html.svg"),
        rating: 4
      }, {
        name: "CSS",
        icon: require("@/assets/icons/css3.svg"),
        rating: 4
      }, {
        name: "JS",
        icon: require("@/assets/icons/javascript.svg"),
        rating: 4
      }, {
        name: "Angular",
        icon: require("@/assets/icons/angular.svg"),
        rating: 4
      }, {
        name: "Vue",
        icon: require("@/assets/icons/vue.svg"),
        rating: 3
      }]
    }
  }
}
</script>

<style scoped lang="scss">

</style>
