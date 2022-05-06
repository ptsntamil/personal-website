<template>
  <article class="m-b-50 contact">
    <head-component name="CONTACT"></head-component>
    <div class="picture"></div>
    <contact-detail-component v-for="contact in contacts" :contact="contact" :key="contact.name"></contact-detail-component>
  </article>
</template>

<script>
import HeadComponent from "@/components/base/HeadComponent";
import ContactDetailComponent from "@/components/base/ContactDetailComponent";

export default {
  name: 'ContactComponent',
  components: {
    ContactDetailComponent,
    HeadComponent
  },
  data: function () {
    return {
      contacts: [{
        name: "Phone",
        icon: require("@/assets/icons/phone-call.png"),
        value: "+91 7373446804"
      },{
        name: "Email",
        icon: require("@/assets/icons/email.png"),
        value: "ptsntamil@gmail.com"
      },{
        name: "LinkedIn",
        icon: require("@/assets/icons/linkedin-letters.png"),
        value: "https://linkedin.com/in/ptsntamil/",
        link: true
      },{
        name: "Website",
        icon: require("@/assets/icons/internet.svg"),
        value: "www.tamilarasans.in",
        link: true
      }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.contact {
  & .row {
    padding: 10px;
  }
  .picture {
    background-image: url(/src/assets/Tamilarasan.jpg);
    width: 100px;
    height: 100px;
    overflow: hidden;
    background-position: 0 23%;
    background-size: 108%;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
}
</style>
