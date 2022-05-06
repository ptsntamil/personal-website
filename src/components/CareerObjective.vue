<template>
  <article class="m-b-50" >
    <head-component name="CAREER OBJECTIVE"></head-component>
    <div>{{objective}}</div>
  </article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
export default {
  name: "CareerObjective",
  components: {
    HeadComponent
  },
  data: function () {
    return {
      objective: `Software developer with a passion to learn and leverage modern
      technologies. 6 Years of experience in Front End development in
      developing complex application with responsive design. Having
      working experience in latest technologies like Angular, React,
      Vue and Node JS. Seasoned agile team player with strong
      adherence to Quality Processes. Having knowledge in developing
      Single Page Application(SPA) and Progressive Web App(PWA).`
    }
  }
}
</script>

<style>

</style>
