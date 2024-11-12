<script>
let objectives = [
    0,
    33,
    66
]
export default {
  name: "timeline",
  props: {
    darkTheme: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    tick(){
      if(!this.isDragging){
        if(this.caouselPosition < objectives[this.nextObjective]){
          this.timeStopped = 0;
          this.caouselPosition += 1;
        }
        else if(this.caouselPosition > objectives[this.nextObjective]){
          this.timeStopped = 0;
          this.caouselPosition -= 2;
        }
        else {
          this.timeStopped ++;
          if(this.timeStopped > 500){
            this.setNextObjective();
          }
        }
      }

    },
    setNextObjective(){
      this.nextObjective = (this.nextObjective + 1) % objectives.length;
    },
    startDrag(event) {
      this.isDragging += 1;
      if (this.isDragging !== 1) return;
      this.startX = event.type === 'touchstart' ? event.touches[0].clientX : event.clientX;
      this.initialPosition = this.caouselPosition;
    },
    onDrag(event) {
      if (this.isDragging !== 1) {
        if(!this.isEnding) this.endDrag()
        return
      }
      this.currentX = event.type === 'touchmove' ? event.touches[0].clientX : event.clientX;
      const deltaX = (this.startX - this.currentX) / window.innerWidth * 30;
      this.caouselPosition = this.initialPosition + deltaX;
    },
    endDrag() {
      this.isEnding = true;

      // Determina la dirección del arrastre
      const dragDirection = this.startX - this.currentX;

      let targetIndex;

      if(Math.abs(dragDirection) < 10) {
        this.setNextObjective();
        this.caouselPosition = Math.floor(this.caouselPosition)
        this.isDragging = false;
        this.isEnding = false;
      };

      if (dragDirection > 0) {
        // Drag hacia la izquierda
        targetIndex = this.nextObjective + 1;
        if (targetIndex >= objectives.length) {
          targetIndex = objectives.length - 1; // Limita al último índice
        }
      } else {
        // Drag hacia la derecha
        targetIndex = this.nextObjective - 1;
        if (targetIndex < 0) {
          targetIndex = 0; // Limita al primer índice
        }
      }
      // Establece el nuevo objetivo
      this.nextObjective = targetIndex;

      // Realiza el desplazamiento suave al objetivo
      this.smoothScrollToObjective(objectives[this.nextObjective]);
    },
    smoothScrollToObjective(target) {
      const interval = setInterval(() => {
        if (Math.abs(this.caouselPosition - target) < 1) {
          this.caouselPosition = target;
          this.isDragging = 0;
          this.timeStopped = 0;
          this.isEnding = false;
          clearInterval(interval);
        } else {
          target < this.caouselPosition ? this.caouselPosition -= 1 : this.caouselPosition += 1;
        }
      }, 10);
    }
  },
  data() {
    return {
      timeStopped: 0,
      caouselPosition: objectives[0],
      nextObjective: 0,
      isDragging: 0,
      isEnding: false,
      startX: 0,
      currentX: 0
    }
  },
  created(){
    setInterval(() => {
      this.tick();
    }, 10)
  }
}
</script>

<template>
  <div class="center flex-col">
    <div>
      <h1 class="padding-2" v-motion-slide-visible-once-bottom :duration="500"> Fases de Implementación: </h1>
      <div class="flex-row center vanish-under-900 margin-width-4">
        <Image
            v-for="i in 7"
            :src="darkTheme?`/timeline/${i} light.svg`:`/timeline/${i} dark.svg`"
            alt="timeline"
            v-motion-slide-visible-once-bottom
            :duration="500"
            :delay="100 + i*100"
            width="100%"
        />
      </div>
      <div class="margin-2 box-appear-under-900"/>
      <div style="width: 90vw; overflow: clip" class="box-appear-under-900"
           @touchstart="startDrag"
           @touchmove="onDrag"
           @touchend="endDrag"
           @mousedown="setNextObjective()"
      >
        <div class="flex flex-row"
             :style="'width: calc(100% * 3); transform: translate(' + -caouselPosition + '%,0)'"
        >
          <div class="appear-under-1000 max-width margin-width-1">
            <div class="third-width" v-for="i in 3">
              <img
                  :src="darkTheme?`/timeline/${i} light small.svg`:`/timeline/${i} dark small.svg`"
                  alt="timeline"
                  v-motion-slide-visible-once-bottom
                  :duration="500"
                  :delay="100 + i*100"
                  width="100%"
              >
            </div>
          </div>
          <div class="appear-under-1000 max-width margin-width-1">
            <div class="third-width" v-for="i in 3">
              <img
                  :src="darkTheme?`/timeline/${i + 3} light small.svg`:`/timeline/${i + 3} dark small.svg`"
                  alt="timeline"
                  v-motion-slide-visible-once-bottom
                  :duration="500"
                  :delay="100 + i*100"
                  width="100%"
              >
            </div>
          </div>
          <div class="appear-under-1000 max-width margin-width-1 center">
            <div class="third-width">
              <img
                  :src="darkTheme?`/timeline/7 light small.svg`:`/timeline/7 dark small.svg`"
                  alt="timeline"
                  v-motion-slide-visible-once-bottom
                  :duration="500"
                  :delay="100 + (i + 3)*100"
                  width="100%"
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
.timeline img{
  width: 100%;
}
</style>