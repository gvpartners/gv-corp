<script>
import darkBackground from '@/public/components/dark.background.component.vue'
import {landingPageRoutes} from "@/tarket/services/config.js";
export default {
  name: 'OurTeam',
  props: {
    darkTheme: Boolean
  },
  components: {
    darkBackground
  },
  data(){
    return {
      mainPictureBigger: false,
      programmers: [
        {
          name: "Sebastian",
          lastname: "García",
          photo: "/photos/sebastian.jpg",
          cargo: "CEO y Project Manager",
          description: "Fundador y líder de GV-Corp. Responsable de la dirección estratégica de la compañía.",
          linkedin: "https://www.linkedin.com/in/sebastianr-garcia/",
          email: "mailto:s.gvrodrigo@gmail.com",
          bigger: false,
        }
      ],
      moreInfo: null,
    }
  },
  methods: {
    openTab(url) {
      window.open(url, '_blank')
    }
  },
  created() {
    this.$emit('setPageId', landingPageRoutes.aboutUs.id)
  }
}
</script>

<template>
  <div class="our-team">
    <h1 v-motion-slide-visible-once-bottom :duration="500">Nuestro Equipo</h1>

    <div class="part-width" v-motion-slide-visible-once-bottom :duration="500">
      <divider/>
    </div>
    <div class="part-width" v-motion-slide-visible-once-bottom :delay="180" :duration="500" style="display: none">
      <divider/>
    </div>

    <div class="flex-col center gap-1">
      <div class="flex-wrap center team-container">
        <div v-for="(programmer, index) in programmers"
             :class="'team-member ' + (programmer.bigger?' bigger':'')"
             @mouseenter="programmer.bigger = true"
             @mouseleave="programmer.bigger = false">
          <Card class="team-member-card" v-motion-slide-visible-once-bottom :delay="240 + index * 60" :duration="500">
            <template #header>
              <img :src="programmer.photo" class="member-picture">
            </template>
            <template #title>
              <h3 class="center">{{programmer.name}}</h3>
              <h3 class="center">{{programmer.lastname}}</h3>
            </template>
            <template #subtitle>
              <h4 class="center">{{programmer.cargo}}</h4>
            </template>
            <template #content>
              <p class="center">{{programmer.description}}</p>
            </template>
            <template #footer>
              <div class="center">
                <Button icon="pi pi-linkedin" text rounded aria-label="Filter" severity="secondary" @click="openTab(programmer.linkedin)"/>
                <Button icon="pi pi-envelope" text rounded aria-label="Filter" severity="secondary" @click="openTab(programmer.email)"/>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.our-team {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  align-content: center;
  margin: 4rem;
}
.team-container{
  gap: 1rem;
}
@media (max-width: 720px) {
  .team-container{
    width: 100%;
  }
}
.team-member{
  transition: scale 0.5s, opacity 0.5s;
}
.bigger {
  scale: 110%;
}
.team-member-card{
  width: 18rem;
}
.team-picture{
  width: 70%;
  height: 80vh;
  object-fit: cover;
  border-radius: 1rem;
}
.member-picture {
  height: 12rem;
  object-fit: cover;
  border-radius: 1rem;
  width: 100%;
}
</style>