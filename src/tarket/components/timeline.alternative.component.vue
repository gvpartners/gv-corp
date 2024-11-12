<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
export default {
  name: "timeline",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    darkTheme: {
      type: Boolean,
      required: true,
    }
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
      <div style="width: 80vw; overflow: clip" class="box-appear-under-900">
        <Swiper :arrows="true" :dots="true">
          <SwiperSlide class="appear-under-1000">
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
          </SwiperSlide>
          <SwiperSlide class="appear-under-1000">
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
          </SwiperSlide>
          <SwiperSlide class="appear-under-1000 center">
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
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>

</template>

<style scoped>
.timeline img{
  width: 100%;
}
</style>