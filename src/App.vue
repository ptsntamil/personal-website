<template>
  <div id="app" class="container-fluid">
    <header-component></header-component>
    <main-component></main-component>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import MainComponent from "@/components/MainComponent";

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  }
}
</script>

<style lang="scss">
@import './scss/global';
</style>
