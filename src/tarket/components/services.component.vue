<script>
import {landingPageRoutes} from "@/tarket/services/config.js";
import services from "@/tarket/services/services.js";
export default {
  name: 'Services',
  props: {
    darkTheme: Boolean
  },
  data(){
    return {
      services: [
        {
          icon: 'pi pi-home',
          value: 0,
          name: 'Diseño y Desarrollo Web',
          description: 'Desarrollamos sitios web innovadores que impulsan su negocio',
          subservices: [
            {
              id: 1,
              name: "Landing Page",
              description: "Creamos páginas de aterrizaje efectivas y atractivas",
              icon: "pi pi-desktop"
            },
            {
              id: 2,
              name: "E-commerce",
              description: "Diseñamos tiendas en línea funcionales y persuasivas",
              icon: "pi pi-cart-minus"
            },
            {
              id: 3,
              name: "Web App",
              description: "Desarrollamos aplicaciones web que digitalizan sus procesos",
              icon: "pi pi-code"
            }
          ]
        },
        {
          value: 1,
          name: 'Diseño de Interfaces',
          description: 'Diseñamos interfaces que mejoran la experiencia del usuario',
          subservices: [
            {
              id: 4,
              name: "UX",
              description: "Creamos experiencias de usuario optimizadas y memorables",
              icon: "pi pi-sparkles"
            },
            {
              id: 5,
              name: "UI",
              description: "Desarrollamos interfaces de usuario elegantes y funcionales",
              icon: "pi pi-objects-column"
            },
            {
              id: 6,
              name: "Prototipado",
              description: "Elaboramos prototipos interactivos para validar sus ideas",
              icon: "pi pi-check-square"
            }
          ]
        },
        {
          value: 2,
          name: 'Marketing Digital',
          description: 'Estrategias de marketing digital para maximizar su presencia en línea',
          subservices: [
            {
              id: 7,
              name: "SEO",
              description: "Optimizamos su sitio web para mejorar su visibilidad en buscadores",
              icon: "pi pi-chart-line"
            },
            {
              id: 8,
              name: "SEM",
              description: "Diseñamos campañas de marketing en buscadores para aumentar su alcance",
              icon: "pi pi-search"
            },
            {
              id: 9,
              name: "SMM",
              description: "Gestionamos campañas en redes sociales para potenciar su marca",
              icon: "pi pi-arrow-circle-up"
            }
          ]
        },
        {
          value: 3,
          name: 'Hosting',
          description: 'Soluciones de hospedaje confiables y seguras para su sitio web',
          subservices: [
            {
              id: 10,
              name: "Dominio",
              description: "Registramos y gestionamos su dominio profesionalmente",
              icon: "pi pi-globe"
            },
            {
              id: 11,
              name: "Hosting",
              description: "Ofrecemos hospedaje web seguro y de alto rendimiento",
              icon: "pi pi-cloud"
            },
            {
              id: 12,
              name: "Mantenimiento",
              description: "Proveemos mantenimiento continuo para un rendimiento óptimo",
              icon: "pi pi-refresh"
            }
          ]
        },
        {
          value: 4,
          name: 'Mantenimiento',
          description: 'Aseguramos el funcionamiento continuo de su sitio web',
          subservices: [
            {
              id: 10,
              name: "Dominio",
              description: "Administramos su dominio para un rendimiento constante",
              icon: "pi pi-check"
            },
            {
              id: 11,
              name: "Hosting",
              description: "Proveemos hospedaje robusto y seguro para su sitio web",
              icon: "pi pi-globe"
            },
            {
              id: 12,
              name: "Mantenimiento",
              description: "Realizamos mantenimiento preventivo y correctivo para su sitio web",
              icon: "pi pi-exclamation-triangle"
            }
          ]
        },
        {
          value: 5,
          name: 'Consultoría',
          description: 'Asesoría experta para maximizar su potencial empresarial',
          subservices: [
            {
              id: 13,
              name: "Consultoría de Proyectos",
              description: "Ofrecemos guía especializada en el desarrollo de sus proyectos",
              icon: "pi pi-briefcase"
            },
            {
              id: 14,
              name: "Consultoría de Negocios",
              description: "Brindamos asesoría estratégica para el crecimiento de su negocio",
              icon: "pi pi-question"
            }
          ]
        }
      ],
      responsiveOptions: [
        {
          breakpoint: '2800px',
          numVisible: 3,
          numScroll: 1
        },
        {
          breakpoint: '900px',
          numVisible: 2,
          numScroll: 1
        },
        {
          breakpoint: '600px',
          numVisible: 1,
          numScroll: 1
        }
      ],
      newServices: services,
      selectedNewService: services[0]
    }
  },
  created() {
    this.$emit('setPageId', landingPageRoutes.services.id)
  }
}
</script>

<template>
  <div class="margin-width-3-over-600 flex-col center gap-5 margin-4">
    <div class="flex-col center">
      <h1 class="margin-width-1-over-600 margin-height-1" v-motion-slide-visible-once-left :duration="500">Servicios</h1>
      <div class="services-title-description-width center" v-motion-slide-visible-once-left :delay="60" :duration="500">
        En GV-Corp, potenciamos su negocio con soluciones digitales innovadoras
        y personalizadas. Nuestro compromiso con la excelencia y la calidad
        asegura que cada proyecto se ejecute con precisión y profesionalismo.
        Confíe en nosotros para llevar su empresa al siguiente nivel en la era digital.
      </div>
    </div>
    <div class="flex flex-wrap center gap-1">
      <div class="flex-col width-max-content">
        <div v-for="service in newServices" key="id" class="margin-bottom-1 new-service"
             @click="selectedNewService = service"
             :style="service.id === selectedNewService.id?'font-weight: bold; ':''">
          <i :class="service.icon"/> {{service.name}}
        </div>
      </div>
      <div class="width-350 appear-under-850 flex-col-only">
        <div class="margin-bottom-2">
          <h2>{{selectedNewService.name}}</h2>
          <p>{{selectedNewService.description}}</p>
        </div>
        <div class="marquee-wrapper">
          <Vue3Marquee :animate-on-overflow-only="true">
            <div v-for="technology in selectedNewService.technologies" key="id"
                 class="margin-bottom-1 new-service">
              <div class="flex-col center margin-width-1">
                <img :src="'/Logos/'+technology.image" :alt="technology.name"
                     style="width: 60px; height: 60px"/>
                <p>{{technology.name}}</p>
              </div>
            </div>
          </Vue3Marquee>
        </div>
      </div>
      <div class="width-600 vanish-under-850">
        <div class="margin-bottom-2">
          <h2>{{selectedNewService.name}}</h2>
          <p>{{selectedNewService.description}}</p>
        </div>
        <div class="marquee-wrapper">
          <Vue3Marquee :animate-on-overflow-only="true">
            <div v-for="technology in selectedNewService.technologies" key="id"
                 class="margin-bottom-1 new-service">
              <div class="flex-col center margin-width-1">
                <img :src="'/Logos/'+technology.image" :alt="technology.name"
                     style="width: 60px; height: 60px"/>
                <p>{{technology.name}}</p>
              </div>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
    <div class="flex-col center gap-1" v-motion-slide-visible-once-left :delay="400" :duration="500">
      <a href="">
        <Button>Nuestro Tarifario</Button>
      </a>
    </div>
  </div>
</template>

<style>
.new-service{
  scale: 100%;
  cursor: pointer;
  transition: scale 0.5s;
}
.new-service:hover{
  scale: 110%;
}


.marquee-wrapper{
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.marquee-wrapper::before,
.marquee-wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  width: 50px;
  z-index: 200;
}
.marquee-wrapper::before {
  left: 0;
  background: linear-gradient(to right, -moz-default-background-color, transparent);
}
.marquee-wrapper::after {
  right: 0;
  background: linear-gradient(to left, -moz-default-background-color, transparent);
}


.services-title-description-width{
  width: 80%;
}
.width-max-content{
  width: max-content;
}
.width-350{
  width: 350px;
}
.width-600{
  width: 600px;
}
@media (min-width: 800px){
   .services-title-description-width{
     width: 600px;
   }
}
</style>