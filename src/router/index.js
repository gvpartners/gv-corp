import { createRouter, createWebHistory } from 'vue-router'
import {landingPageRoutes} from "@/tarket/services/config.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: landingPageRoutes.landing.route,
      name: landingPageRoutes.landing.name,
      component: landingPageRoutes.landing.component,
    },
    {
      path: landingPageRoutes.aboutUs.route,
      name: landingPageRoutes.aboutUs.name,
      component: landingPageRoutes.aboutUs.component,
    },
    {
      path: landingPageRoutes.contactUs.route,
      name: landingPageRoutes.contactUs.name,
      component: landingPageRoutes.contactUs.component,
    },
    {
      path: landingPageRoutes.services.route,
      name: landingPageRoutes.services.name,
      component: landingPageRoutes.services.component,
    },
    {
      path: landingPageRoutes.portfolio.route,
      name: landingPageRoutes.portfolio.name,
      component: landingPageRoutes.portfolio.component,
    },
    {
      path: '/:pathMatch(.*)',
      redirect: landingPageRoutes.landing.route
    }
  ]
})

export default router
