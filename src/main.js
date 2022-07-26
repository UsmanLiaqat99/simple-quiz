import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.use(Equal);
app.use(router);

app.component('base-button', BaseButton)

app.mount("#app");
