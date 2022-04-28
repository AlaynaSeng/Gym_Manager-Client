import {createRouter, createWebHistory} from "vue-router"
const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path:'/',
            name:'home',
            component: () => import('../views/Home.vue')
        },
        {
            path:'/client',
            name:'client',
            component: () => import('../views/client.vue')
        },
        {
            path:'/instructor',
            name:'instructor',
            component: () => import('../views/instructor.vue')
        },
        {
            path:'/group',
            name:'group',
            component: () => import('../views/group.vue')
        },
    ]
})

export default router