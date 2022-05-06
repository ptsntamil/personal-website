<template>
  <article class="m-b-50 education text-right">
    <head-component name="KEY SKILLS"></head-component>
    <skill-component v-for="skill in skills" :key="skill.name" :skill="skill"></skill-component>
<!--    <div class="skill html">-->
<!--      <img src="img/icons/html.svg" alt="HTML" title="HTML" />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="skill css">-->
<!--      <img src="img/icons/css3.svg" alt="CSS" title="CSS" />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="skill js">-->
<!--      <img src="img/icons/javascript.svg" alt="JS" title="JS" />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="skill angular">-->
<!--      <img-->
<!--          src="img/icons/angular.svg"-->
<!--          alt="Angular JS"-->
<!--          title="Angular JS"-->
<!--      />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="skill react">-->
<!--      <img src="img/icons/vue.svg" alt="Vue" title="Vue" />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="skill nodejs">-->
<!--      <img src="img/icons/nodejs.svg" alt="NodeJS" title="NodeJS" />-->
<!--      <div class="row stars">-->
<!--        <div class="offset-3 col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--        <div class="col-1"></div>-->
<!--      </div>-->
<!--    </div>-->
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
