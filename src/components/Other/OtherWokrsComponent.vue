<template>
<article>
<div class="m-b-50 text-right project other-works">
  <head-component name="OTHER WORKS"></head-component>
  <ul class="list-unstyled">
    <li v-for="work in works" :key="work.name">
      <a :href="work.url" target="_blank"
      >{{work.name}}</a
      >
      <img
          :src="work.icon"
          :alt="work.name"
          class="width-35px ml-3"
      />
    </li>
<!--    <li>-->
<!--      <a href="https://github-timeline-73042.web.app" target="_blank">Github Timeline</a>-->
<!--      <img-->
<!--          src="img/GitHub-Mark-32px.png"-->
<!--          alt="Github Timeline"-->
<!--          class="width-35px ml-3"-->
<!--      />-->
<!--    </li>-->
  </ul>
</div>
</article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
export default  {
  name: "OtherWorksComponent",
  components: {
    HeadComponent
  },
  data: function () {
    return {
      works:[{
        name: "FreshDataLabs",
        url: "https://freshdatalabs.com",
        icon: require("@/assets/fdl.png")
      }, {
        name: "Github Timeline",
        url: "https://github-timeline-73042.web.app",
        icon: require("@/assets/GitHub-Mark-32px.png")
      }]
    }
  }
}
</script>

<style lang="scss" scoped>
.other-works {
  li {
    a {
      font-size: 16px;
      color: #607d8b;
      font-weight: 600;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
