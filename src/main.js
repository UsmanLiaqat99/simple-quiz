import { createApp } from "vue";

import App from "./App.vue";
import router from "./router.js";
import store from "./store/index.js";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

import BaseButton from "./components/UI/BaseButton.vue";

const app = createApp(App);

app.use(Equal);
app.use(router);
app.use(store);

app.component("base-button", BaseButton);

app.mount("#app");
