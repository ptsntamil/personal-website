<template>
  <article class="m-b-50" id="projects">
    <head-component name="PROFESSIONAL EXPERIENCE"></head-component>
    <project-component v-for="project in projects" :key="project.name" :project="project"></project-component>
  </article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
import ProjectComponent from "@/components/Professional/ProjectComponent";

import DataService from "../../service/service";

export default {
  name: "ProfessionalExperience",
  data: function () {
    return {
      projects: []
    };
  },
  components: {
    HeadComponent,
    ProjectComponent
  },
  beforeCreate() {
    DataService.getAll().then(d => {
      console.log(d.projects);
      this.projects = d.projects;
    });
  }
}
</script>
