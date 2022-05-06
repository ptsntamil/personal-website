<template>
  <div class="text-left project" :class="getClass">
    <p class="theme-clr mb-1" v-text="checkEmpty(project.duration)"></p>
    <p class="gray-clr mb-1">{{project.name}}</p>
    <p class="font-italic">
      {{Array.isArray(project.skills) ? project.skills.join(", ") : ""}}
    </p>
    <div class="company">
      <a target="_blank" :href="getValueFromObject('company.website', project)">
      <img :src="getLogo"
           :alt="getValueFromObject('company.name', project)"
           :title="getValueFromObject('company.name', project)"
      />
      </a>
    </div>
    <p v-text="checkEmpty(project.description)"></p>
    <ul v-html="getPoints(project.points)"></ul>
  </div>
</template>

<script>
export default {
  name: "ProjectComponent",
  props: {
    project: Object
  },
  computed: {
    getClass() {
      let c = this.project.name;
      if (c) {
        return  " " + c.toLowerCase().replaceAll(" ", "-");
      }

      return  "";
    },
    getLogo() {
      return require("@/assets/"+ this.project.company.logo);
    }
  },
  methods: {
    getPoints(points) {
      if (points) {
        return points.reduce((acc, point) => acc += `<li>${point}</li>`, "");
      }

      return  "";
    },
    checkEmpty(val) {
      return val ? val : "";
    },
    getValueFromObject(fieldKey, dbValue) {
      if (dbValue) {
        return fieldKey.split(".").reduce((obj, key) => obj ?  obj[key] : "", dbValue);
      }

      return "";
    },
  }
}
</script>

<style lang="scss" scoped>
.project {
  position: relative;

  .company {
    position: absolute;
    right: 0;
    width: 50px;
    top: 12px;
    img {
      width: 100%;
    }
  }

  p {
    &:first-child {
      font-weight: 700;
    }

    &:nth-child(2) {
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
}
</style>
