<template>
  <div class="skill html">
    <img :src="skill.icon" :alt="skill.name" :title="skill.name" />
    <div class="row stars">
      <div class="offset-3 col-1" :class="{'bg-gray': skill.rating !== 5}"></div>
      <div class="col-1"
           v-for="counter in 4 - 0"
           :key="counter"
           :class="{'bg-gray': skill.rating + counter <= 4}"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillComponent',
  props: {
    skill: Object
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables/variables";

.skill {
  margin-bottom: 5px;
  & .stars {
    & div {
      padding: 3px;
      background: $theme-clr;
      margin-right: 7%;
      &:last-child {
        margin-right: 0%;
      }
    }
  }
  & img {
    margin-bottom: 5px;
  }
}
</style>
