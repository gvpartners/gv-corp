import landingPage from '../../tarket/views/landing.view.vue';
import aboutUsComponent from "@/tarket/components/about.us.component.vue";
import contactUsComponent from "@/tarket/components/contact.us.component.vue";
import servicesComponent from "@/tarket/components/services.component.vue";
import portfolioComponent from "@/tarket/components/portfolio.component.vue";

export let landingPageRoutes = {
    landing: {
        component: landingPage,
        route: '/',
        name: 'Inicio',
        id: 0,
    },
    services: {
        component: servicesComponent,
        route: '/services',
        name: 'Servicios',
        id: 1,
    },
    portfolio: {
        component: portfolioComponent,
        route: '/portfolio',
        name: 'Portafolio',
        id: 2,
    },
    aboutUs: {
        component: aboutUsComponent,
        route: '/about-us',
        name: 'Sobre Nosotros',
        id: 3,
    },
    contactUs: {
        component: contactUsComponent,
        route: '/contact-us',
        name: 'Contáctanos',
        id: 4,
    },
}
export function getLandingPageRoutesAsArray() {
    return Object.values(landingPageRoutes);
}