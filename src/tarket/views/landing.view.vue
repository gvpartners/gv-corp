<script>
import technologiesComponent from "@/tarket/components/technologies.component.vue";
import timelineComponent from "@/tarket/components/timeline.alternative.component.vue";
import {landingPageRoutes} from "@/tarket/services/config.js";

export default {
  props: {
    appointMeeting: {
      type: String,
      required: true,
    },
    darkTheme: {
      type: Boolean,
      required: true,
    }
  },
  name: "tarket",
  components: {
    technologiesComponent,
    timelineComponent
  },
  data() {
    return {
      //Ticker controller
      timeInScreenMilis: 2000,
      tickInMillis: 20,
      timeInScreen: 0,
      nowShowingId: 0,
      nowShowing: "",
      hasBeenFull: false,
      hookMessages: [
        "Diseñamos el futuro digital de tu empresa",
        "Creamos sitios web que destacan y convierten",
        "Transformamos tu presencia digital para líderes del sector",
        "Innovación tecnológica al servicio de tu empresa",
      ],
    }
  },
  methods:{
    tick(){

      //Si no has dibujado el texto completo
      if(!this.hasBeenFull){
        //Si aún no has escrito la frase completa
        if(this.nowShowing.length < this.hookMessages[this.nowShowingId].length){
          //copia el siguiente caracter
          this.nowShowing += this.hookMessages[this.nowShowingId][this.nowShowing.length]
        }
        else this.hasBeenFull = true
      }
      //Si ya se termino de dibujar, dejalo un tiempo en pantalla
      else if(this.timeInScreen < this.timeInScreenMilis) this.timeInScreen += this.tickInMillis
      //y luego borralo
      else {
        this.nowShowing = this.nowShowing.substring(0, this.nowShowing.length - 1);
        // Si ya se ha borrado el texto, reinicia las variables
        if (this.nowShowing.length === 0) {
          this.hasBeenFull = false;
          this.timeInScreen = 0;
          this.nowShowingId = (this.nowShowingId + 1) % this.hookMessages.length;
        }
      }
      /*
      if(this.nowShowing.length === 0){
        this.nowShowingId = (this.nowShowingId + 1) % this.hookMessages.length;
        this.nowShowing = this.hookMessages[this.nowShowingId];
      }
      if(this.timeInScreen < this.timeInScreenMilis) this.timeInScreen += this.tickInMillis
      else {
        this.timeInScreen = 0;
        this.nowShowingId = (this.nowShowingId + 1) % this.hookMessages.length;
        this.nowShowing = this.hookMessages[this.nowShowingId];
      }
      */
    },
    openTab(url){
      window.open(url, '_blank')
    }
  },
  created(){
    setInterval(this.tick, this.tickInMillis);
    this.$emit('setPageId', landingPageRoutes.landing.id)
  }
}
</script>

<template>
  <div class="main-separator">
    <video
        class="parallax-effect-behind"
        autoplay
        muted
        loop
        disablePictureInPicture
        playsinline
        controlsList="nodownload nofullscreen noremoteplayback">
      <source src="/backgrounds/background.mp4" type="video/mp4">
    </video>
    <div class="first-viewable">
      <div class="main-separator">
        <div class="hook-text">
          <h1 class="always-white vanish-under-1000">{{nowShowing}}</h1>
          <h2 class="always-white vanish-under-700 appear-under-1000">{{nowShowing}}</h2>
          <h3 class="always-white vanish-under-600 appear-under-700">{{nowShowing}}</h3>
          <h4 class="always-white vanish-under-500 appear-under-600">{{nowShowing}}</h4>
          <div class="always-white appear-under-500">
            <div class="flex-wrap gap-025 center margin-width-1">
              <h4 v-for="words in nowShowing.split(' ')">{{words}}</h4>
            </div>
          </div>
        </div>
        <Button @click="openTab(appointMeeting)">
          Agendar Reunión
        </Button>
      </div>
    </div>
  </div>
  <div class="no-parallax-container">
    <div class="no-parallax-efect" :style="darkTheme?'background-color: var(--dark-background)':'background-color: var(--light-background)'">
      <timelineComponent :darkTheme="darkTheme"/>
    </div>
  </div>
  <technologiesComponent text-classes="always-white"/>
</template>

<style scoped>
.main-separator {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  align-content: center;
  position: relative;
  overflow: hidden;
}
.parallax-effect-behind {
  position: fixed; /* Mantenerlo fijo en la pantalla */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(5px) brightness(0.4);
  transition: all 0.5s;
  z-index: 0;
}
.first-viewable{
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  min-height: calc(100vh - 8rem);
}
.hook-text{
  display:flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  overflow: hidden;
}
.no-parallax-container {
  display: block;
  align-items: center;
  align-content: center;
  position: relative;
  width: 100%;
}
.no-parallax-efect {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  left: 0;
  transform: none;
}
</style>