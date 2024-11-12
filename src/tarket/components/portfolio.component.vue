<script>
import {landingPageRoutes} from "@/tarket/services/config.js";

export default {
  name: 'Portfolio',
  data(){
    return {
      projects: [
        {
          name: 'Akira',
          description: 'Un e-comerce de productos asiáticos',
          image: '/portfolio-pictures/akira.jpg',
          link: 'http://tarket.site:5173/store',
          id: 1,
        },
        {
          name: 'Unicon App',
          description: 'Cotizador de bloques',
          image: '/portfolio-pictures/uniconapp.jpg',
          link: 'https://unicon-bloques-app.vercel.app/auth/login',
          id: 2,
        },
        {
          name: 'Entrepisos App',
          description: 'Aplicación de gestión de prefabricados',
          image: '/portfolio-pictures/entrepisosapp.jpg',
          link: 'www.yahoo.com',
          id: 3,
        }
      ],
      selectedProjectName: null,
      responsiveOptions: [
        {
          breakpoint: '4999px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '1099px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '799px',
          numVisible: 1,
          numScroll: 1
        }
      ]
    }
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    }
  },
  created() {
    this.$emit('setPageId', landingPageRoutes.portfolio.id)
  }
}
</script>

<template>
  <div class="main-separator">
    <div class="hook-text" v-motion-pop-visible-once>
      <h1>Portafolio</h1>
    </div>
    <Carousel :value="projects" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions" class="carousel">
      <template #item="slotProps">
        <div class="card-scaler" :style="selectedProjectName === slotProps.data.name?'scale: 110%;':''" @mouseenter="selectedProjectName = slotProps.data.name" @mouseleave="selectedProjectName = null">
          <Card class="portfolio-item" :key="slotProps.data.name" @click="openLink(slotProps.data.link)" v-motion-pop-visible-once :delay="120 + slotProps.data.id * 100">
            <template #header>
              <div class="portfolio-image">
                <img :src="slotProps.data.image" :alt="slotProps.data.name">
               </div>
            </template>
            <template #title>
              <div class="center">
                {{slotProps.data.name}}
              </div>
            </template>
            <template #content>
              <div class="center">
                {{slotProps.data.description}}
              </div>
            </template>
          </Card>
        </div>

      </template>
    </Carousel>
  </div>
</template>

<style scoped>
.main-separator {
  margin: 4rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  align-content: center;
  position: relative;
  overflow: hidden;
}
.portfolio-item {
  text-align: center;
  align-items: center;
  border-radius: 1rem;
  margin: 1rem;
}
.portfolio-image{
  width: 100%;
  height: 150px;
  border-radius: 1rem;
  overflow: hidden;
}
.portfolio-image img {
  display: flex;
  object-fit: cover;
  object-position: center;
  height: 150px;
  width: 100%;
}
.card-scaler{
  transition: scale 0.5s, opacity 0.5s;
  cursor: pointer;
}

.carousel{
  width: 92%;
  display: flex;
  justify-content: center;
}
@media (min-width: 500px) {
  .carousel{
    width: 450px;
  }
}
@media (min-width: 800px) {
  .carousel{
    width: 92%;
  }
}
@media (min-width: 1000px) {
  .carousel{
    width: 920px;
  }
}
@media (min-width: 1200px) {
  .carousel{
    width: 1100px;
  }
}
</style>