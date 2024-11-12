<script>
import scheduleMeetingComponent from '../components/schedule.meeting.component.vue'
import {landingPageRoutes} from "@/tarket/services/config.js";
export default {
  name: 'ContactUs',
  components: {
    scheduleMeetingComponent
  },
  data(){
    return {
      contactMethods: [
        {name: 'Email', value: 's.gvrodrigo@gmail.com'},
        {name: 'Telefono', value: '+51 945 740 538'},
        {name: 'Direccion', value: 'Calle electra 173, Chorrillos, Lima'}
      ]
    }
  },
  props: {
    darkTheme: {
      type: Boolean,
      required: true,
    }
  },
  created() {
    this.$emit('setPageId', landingPageRoutes.contactUs.id)
  }
}
</script>

<template>
  <div class="flex-row contact-us center gap-4 margin-auto">
    <div class="picture" v-motion-slide-visible-once-left :duration="500">
      <img :src="darkTheme?'/dark.png':'/light.png'" class="about-us-picture">
    </div>
    <div class="text">
      <h1 v-motion-slide-visible-once-right :duration="500">Contáctanos</h1>
      <div class="contact-container margin-2 gap-1">
        <div class="contact-method left" v-for="(contactMethod, index) in contactMethods">
          <div class="contact-method-name" v-motion-slide-visible-once-right :delay="200*(index+1) - 100" :duration="500">{{contactMethod.name}}</div>
          <div class="contact-method-value" v-motion-slide-visible-once-right :delay="200*(index+1)" :duration="500">{{contactMethod.value}}</div>
        </div>
      </div>
    </div>
  </div>
  <div style="display: none">
    <scheduleMeetingComponent :darkTheme="darkTheme" :delay="contactMethods.length*200 + 300"/>
  </div>

</template>

<style scoped>
@media (max-width: 800px){
  .contact-us{
     flex-direction: column; gap: 0; margin: 4rem 0;
  }
}
.about-us-picture{
  height: 20rem;
  object-fit: cover;
  border-radius: 1rem;
  width: 20rem;
}
@media (max-width: 700px) {
  .about-us-picture{
    width: 16rem;
    height: 20rem;
  }
}
.contact-method{
  display: flex;
  flex-direction: column;
}
.contact-method-name{
  font-size: 1.2rem;
  font-weight: bold;
}
.contact-method-value{
  font-size: 1rem;
}
.contact-container{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}
</style>