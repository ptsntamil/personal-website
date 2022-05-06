<template>
  <div class="head">
    <span class="line"> <hr /></span>
    <span class="p-20 text">{{name}}</span>
  </div>
</template>

<script>
export default {
  name: 'HeadComponent',
  props: {
    name: String
  }
}
</script>

<style scoped lang="scss">
@import "src/scss/variables/variables";

.head {
  position: relative;
  font-size: 20px;
  display: flex;
  flex-flow: row-reverse;
  top: -17px;

  & .line {
    width: 20%;
    & hr {
      border-top: 3px solid $theme-clr;
      opacity: 1;
    }
  }

  & .text {
    letter-spacing: 2px;
    font-weight: 600;
  }
}
</style>
