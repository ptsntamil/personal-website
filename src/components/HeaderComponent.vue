<template>
  <section class="head">
    <div class="row">
      <div class="col-12">
        <div class="name">
          <span>{{name}}</span>
          <div class="bg-gray"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data: function() {
    return {
      name: "Tamilarasan P"
    };
  },
}
</script>

<style scoped lang="scss">
@import "src/scss/variables/variables";
.head {

  & .name {
    position: relative;
    text-align: center;

    & span {
      background: $white;
      padding: 5px 20px;
      border: 3px solid $theme-clr;
      font-size: 30px;
      font-weight: 600;
      text-transform: uppercase;
    }
  }

  .bg-gray {
    background-color: $gray;
    padding: 35px;
    margin-top: -22px;
  }
}
</style>
