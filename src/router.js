import { createRouter, createWebHistory } from 'vue-router';

import main from './components/TheMain'
import CheckBox from './components/CheckBox.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: main
        },
        {
            path: '/checkbox',
            component: CheckBox
        }
    ]
})

export default router;