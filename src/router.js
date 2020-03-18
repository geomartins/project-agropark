import Vue from "vue";
import Router from "vue-router";
import Welcome from "./views/Welcome.vue";
import Faq from "./views/Faq.vue";
import Contact from "./views/Contact.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Welcome",
      component: Welcome
    },

    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/404",
      name: "Error",
      component: () => import("./views/Error.vue")
    },
    { path: '*', redirect: '/404'},

    
  ]
});
