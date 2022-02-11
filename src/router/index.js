import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    //login
    {
        path: '/',
        name: 'login',
        component: () => import("../views/auth/LogIn")
    },
    //edit a existing peron
    {
        path: '/persons/:id/edit',
        name: 'edit-person',
        meta: { label:"Edit Person" },
        component: () => import("../views/persons/Edit")
    },
    //overview persons
    {
        path: '/persons',
        name: 'persons',
        meta: { label:"Overview Persons" },
        component: () => import("../views/persons/Index")
    },
    //create a new person
    {
        path: '/register',
        name: 'register',
        meta: { label:"Register Person" },
        component: () => import("../views/persons/Register")
    },
    {
        path: '/:catchAll(.*)*',
        name: 'NotFound',
        meta: { label:"Page Not Found" },
        component: () => import("../views/NotFound.vue")
    },
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router