<template>
  <div class="mt-2">
    <p class="theme-clr">{{education.year}}</p>
    <p class="gray-clr">{{education.degree}}</p>
    <p>{{education.insName}}</p>
  </div>
</template>

<script>
export default {
  name: 'EducationDetailComponent',
  props: {
    education: Object
  }
}
</script>

<style scoped lang="scss">
p {
  margin-bottom: 0px;
  font-weight: 700;

  &:first-child {
    margin-bottom: 10px;
  }
}
</style>
