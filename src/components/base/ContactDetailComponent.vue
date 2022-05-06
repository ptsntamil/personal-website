<template>
  <div class="row text-right">
    <div class="col-10" v-if="!contact.link">{{contact.value}}</div>
    <div class="col-10" v-else><a :href="contact.value">{{contact.value}}</a></div>
    <div class="col-2">
      <img :src="contact.icon" :alt="contact.name" :title="contact.name"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactDetailComponent',
  props: {
    contact: Object
  }
}
</script>

<style scoped lang="scss">
.row {
  padding: 10px;
  .col-2 {
    padding-right: 2px;
  }

  .col-10 {
    word-break: break-all;
    a {
      color: #4e56b2;
      text-decoration: none;
      &:hover{
        color: #1020d3;
        font-weight: 700;
      }
    }
  }
}
</style>
