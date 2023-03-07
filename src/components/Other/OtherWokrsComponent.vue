<template>
<article>
<div class="m-b-50 text-right project other-works">
  <head-component name="OTHER WORKS"></head-component>
  <ul class="list-unstyled">
    <li v-for="work in works" :key="work.name">
      <a :href="work.url" target="_blank">{{work.name}}</a>
      <img :src="work.icon"
           :alt="work.name"
           class="width-35px ml-3"/>
    </li>
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
        name: "Blog - Fillable PDF",
        url: "https://medium.com/@ptsntamil/implementing-fillable-pdf-in-web-application-java-angular-e8f71afa1a06",
        icon: require("@/assets/icons/medium.svg")
      },{
        name: "Blog - Browser Extension",
        url: "https://medium.com/@ptsntamil/data-exchange-in-browser-extension-be241809c26f",
        icon: require("@/assets/icons/medium.svg")
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
    padding: 3px 0;
    
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
