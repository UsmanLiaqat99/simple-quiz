import { createRouter, createWebHistory } from 'vue-router';

import main from './components/TheMain'
import form from './components/TheForm.vue'
import category from './components/TheCategory.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: form
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/quiz',
            component: main
        }
    ]
})

export default router;