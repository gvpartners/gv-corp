import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import MyPreset from "@/styles/preset.js";
import 'primeicons/primeicons.css'
import Vue3Marquee from 'vue3-marquee'
import Button from "primevue/button";
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Password from "primevue/password";
import ProgressBar from "primevue/progressbar";
import ProgressSpinner from "primevue/progressspinner";
import Divider from 'primevue/divider';
import Image from "primevue/image";

import {MotionPlugin} from "@vueuse/motion";


import Accordion from 'primevue/accordion';
import AccordionPanel from 'primevue/accordionpanel';
import AccordionHeader from 'primevue/accordionheader';
import AccordionContent from 'primevue/accordioncontent';

import "@/styles/global.css"

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
    }
});
app.use(MotionPlugin);
app.use(Vue3Marquee);
app.component("Button", Button)
app.component("Card", Card)

app.component("InputText", InputText)
app.component("InputNumber", InputNumber)
app.component("Password", Password)

app.component("FloatLabel", FloatLabel)

app.component("ProgressSpinner",ProgressSpinner)
app.component("ProgressBar",ProgressBar)
app.component("Divider",Divider)
app.component("Image", Image)

app.component("Carousel", Carousel)

app.component("Accordion",Accordion)
app.component("AccordionPanel",AccordionPanel)
app.component("AccordionHeader",AccordionHeader)
app.component("AccordionContent",AccordionContent)

app.mount('#app')