<script>
  import { RouterLink, RouterView } from 'vue-router'
  import {getLandingPageRoutesAsArray} from "@/tarket/services/config.js";
  export default {
    name: 'App',
    components: {
      RouterLink,
      RouterView
    },
    data(){
      return {
        isTopSheetOpen: false,
        whatsappLink: 'https://wa.me/+51945740538',
        appointLink: "https://calendar.google.com/calendar/u/0/r",
        socialMedia: [
          {
            name: 'Correo',
            icon: 'pi pi-envelope',
            url: 'mailto:s.gvrodrigo@gmail.com'
          },
          {
            name: 'Instagram',
            icon: 'pi pi-instagram',
            url: 'https://www.instagram.com/sebastianrgarciav/'
          },
          {
            name: 'Whatsapp',
            icon: 'pi pi-whatsapp',
            url: 'https://wa.me/+51945740538',
          }
        ],
        darkTheme: false,

        landingPageId: 0,
        landingPageRoutes: getLandingPageRoutesAsArray(),

        scrollOptions: {
          frameRate: 150,
          animationTime: 400,
          stepSize: 100,
          pulseAlgorithm: true,
          pulseScale: 4,
          pulseNormalize: 1,
          accelerationDelta: 50,
          accelerationMax: 3,
          keyboardSupport: true,
          arrowScroll: 50,
        },
        accumulatedDeltaX: 0,
        accumulatedDeltaY: 0,
        isAnimating: false,
        keyDownStatus: {},
      }
    },
    methods:{
      openTab(url){
        window.open(url, '_blank')
      },
      updateTheme() {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          this.darkTheme = true;
        } else {
          this.darkTheme = false;
        }
      },

     
    },
    created(){
      this.updateTheme();
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', this.updateTheme);
    },
    beforeUnmount() {
    }
  }
</script>

<template>
  <header>
    <div class="start center">
      <div class="textButton vanish-under-1100">
        <div class="flex-row center gap-1">
          <img :src="darkTheme?'/inverted.png':'/not_inverted.png'" class="main-logo">
          <div class="flex-col left" @click="$router.push('/landing')">
            <h1>GV-Corp</h1>
            <p>Agencia de Digitalización Empresarial</p>
          </div>
        </div>
      </div>
      <div class="appear-under-1100"/>
    </div>
    <div class="appear-under-1100">
      <div class="mid center flex-col">
        <div @click="$router.push('/landing')">
          <img src="/hold.png" class="main-logo">
        </div>
      </div>
    </div>
    <div class="end center">
      <div class="vanish-under-1100">
        <div class="flex-row center gap-2">
          <div v-for="route in landingPageRoutes"
               @click="landingPageId = route.id; $router.push(route.route)"
               :class="'textButton ' + (landingPageId === route.id?'underline-selected':'underline-animated')">
            {{route.name}}
          </div>
        </div>
      </div>
      <div class="appear-under-1100">
        <Button icon="pi pi-bars" text rounded aria-label="Filter" severity="secondary" @click="isTopSheetOpen = !isTopSheetOpen"/>
      </div>
    </div>
  </header>
  <div class="optional-container center" v-if="isTopSheetOpen" :style="darkTheme?'background-color: #1E1E1E;':'background-color: #EEE;'">
    <div v-for="route in landingPageRoutes"
         @click="landingPageId = route.id; $router.push(route.route); isTopSheetOpen = false"
         :class="'textButton ' + (landingPageId === route.id?'underline-selected':'underline-animated')">
      {{route.name}}
    </div>
  </div>
  <main @click="isTopSheetOpen = false">
    <RouterView class="max-width" :appointMeeting="appointLink" :darkTheme="darkTheme" @setPageId="(id)=>{landingPageId = id}"/>
  </main>
  <footer class="gap-1">
    <div class="flex-wrap center">
      <div v-for="social in socialMedia" @click="openTab(social.url)" class="margin-1">
        <i :class="social.icon" style="scale: 200%"/>
      </div>
    </div>
    <div class="flex-col center gap-1">
      <h3>© 2024 GV-Corp - Agencia de Digitalización Empresarial</h3>
    </div>
  </footer>
  <Card style="display: none"/>
  <Divider style="display: none"/>
  <div class="floating-down-right vanish-under-350">
    <Button text rounded aria-label="Filter" severity="primary" @click="openTab(whatsappLink)" class="bigger">
      <i class="pi pi-whatsapp"/>
    </Button>
  </div>
</template>
<!-- arriba, derecha, abajo, izquierda -->
<!-- animation: slidedown-icon 1s infinite; -->
<style scoped>
header {
  width: 100%;
  padding: 2rem 3rem 2rem 2rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;

  min-height: 8rem;
  background-color: var(--p-card-background);
  border-bottom: 1px solid var(--p-divider-border-color);

  position: relative;
  z-index: 2;
}
main{
  min-height: calc(100vh - 16rem);
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
}
.bigger{
  scale: 300%;
  padding-bottom: 75px;
}
footer{
  border-top: 1px solid var(--p-divider-border-color);
  background-color: var(--p-card-background);
  min-height: 8rem;
  width: 100%;
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;

  position: relative;
  z-index: 2;
}
.optional-container{
  padding: 2rem;
  display: none;
  position: relative;
  flex-direction: column;
  gap: 1.2rem;
}
@media (max-width: 1100px) {
  .optional-container {
    position: relative;
    display: flex;
    z-index: 2;
  }
}
.start, .mid, .end{
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
  width: 100%
}
@keyframes slidedown-icon {
  0% {transform: translateY(0)}
  50% {transform: translateY(20px)}
  100% {transform: translateY(0)}
}
.main-logo{
  align-self: center;
  width: 5rem;
  height: 5rem;
  border-radius: 1rem;
}
.floating-down-right{
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;
}



.underline-animated {
  position: relative;
  display: inline-block;
}

.underline-animated::after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 1.5px;
  bottom: -2px;
  left: 0;
  background-color: var(--p-button-primary-hover-background);
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.underline-animated:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}



.underline-selected {
  position: relative;
  display: inline-block;
}
.underline-selected::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 1.5px;
  bottom: -2px;
  left: 0;
  background-color: var(--p-button-primary-hover-background);
}
</style>
