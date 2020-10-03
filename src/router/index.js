import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store/index";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/About.vue"),
    },
    {
        path: "/login",
        name: "Login",
        component: () => import("../views/Login.vue"),
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
    },
    {
        path: "/blog",
        name: "Blogs",
        component: () => import("../views/Blogs.vue"),
        beforeEnter: (to, from, next) => {
            if (store.state.isAuth) {
                next();
            } else {
                next("./login");
            }
        },
    },
    {
        path: "/blog/new",
        name: "Blog",
        component: () => import("../views/Blog.vue"),
    },
];

const router = new VueRouter({
    routes,
});

export default router;
