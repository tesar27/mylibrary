import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router =  new Router({
  mode: "history",
    routes: [
        {
            path: "/",
            redirect: '/index'
        },
        {
            path: "/test",
            name: "test",
            component: () => import(/* webpackChunkName: "Test" */ "./views/Test.vue")
        },
    ]
});

export default router;