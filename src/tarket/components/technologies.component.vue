<script>
import {centerInitial, centerAnimation} from "@/styles/animations.js";
export default {
  name: 'Technologies',
  props: {
    textClasses: {
      type: String,
      default: "always-white"
    }
  },
  data(){
    return {
      logos: [
        {logo: "angular.png", important: true},
        {logo: "css.png", important: false},
        {logo: "docker.png", important: false},
        {logo: "express.png", important: false},
        {logo: "figma.png", important: true},
        {logo: "git.png", important: false},
        {logo: "github.png", important: false},
        {logo: "html.png", important: true},
        {logo: "illustrator.png", important: false},
        {logo: "java.png", important: true},
        {logo: "js.png", important: true},
        {logo: "material.png", important: false},
        {logo: "mongo.png", important: true},
        {logo: "mssql.png", important: false},
        {logo: "mysql.png", important: true},
        {logo: "net.png", important: true},
        {logo: "node.png", important: false},
        {logo: "postgresql.png", important: true},
        {logo: "primevue.png", important: false},
        {logo: "python.png", important: true},
        {logo: "spring.png", important: true},
        {logo: "vite.png", important: false},
        {logo: "vue.png", important: true},
      ],
      centerInitial: centerInitial,
    }
  },
  methods: {
    centerAnimation: centerAnimation
  }
}
</script>

<template>
  <div class="flex-col center margin-3">
    <h1 :class="'padding-2 ' + textClasses" v-motion :initial="centerInitial" :visible-once="centerAnimation()">Tecnologías de Implementación</h1>
    <div :class="'part-width center vanish-under-690 ' + textClasses" v-motion :initial="centerInitial" :visible-once="centerAnimation(10)">
      Utilizamos las tecnologías más avanzadas para asegurar el éxito de sus proyectos.
      Nuestro equipo domina herramientas y frameworks de vanguardia, garantizando
      soluciones robustas, eficientes y adaptadas a sus necesidades específicas.
      Confiamos en lo mejor del sector para ofrecer resultados excepcionales
    </div>
  </div>
  <div class="maybe-part-width flex-wrap center margin-bottom-4">
    <img v-for="(logo, index) in logos" :src="'/Logos/' + logo.logo" :class="logo.important?'logo':'logo vanish-under-690'" alt="logo de tecnología" v-motion :initial="centerInitial" :visible-once="centerAnimation(index)"/>
  </div>
</template>

<style scoped>
.maybe-part-width{
  width: 65%;
}
@media (max-width: 530px){
  .maybe-part-width{
    width: 80%;
  }
}
.logo{
  width: 5rem;
  height: 5rem;
  margin: 1rem;
  object-fit: contain;
}
</style>