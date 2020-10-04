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
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/register",
        name: "Register",
        component: () => import("../views/Register.vue"),
        meta: {
            requiresAuth: false,
        },
    },
    {
        path: "/blog",
        name: "Blogs",
        component: () => import("../views/Blogs.vue"),
    },
    {
        path: "/blog/new",
        name: "Blog",
        component: () => import("../views/Blog.vue"),
        meta: {
            requiresAuth: true,
        },
    },
];

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth === true) {
		console.log("check if logged in");
		if (store.getters.isAuth) {
			next();
		} else {
			next('/login')
		}
    } else if (to.meta.requiresAuth === false) {
        if (store.getters.isAuth) {
			next(from.path);
		} else {
			next()
		}
    } else {
        next();
    }
});

export default router;
