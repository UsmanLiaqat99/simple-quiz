import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js";
import Equal from "equal-vue";
import "equal-vue/dist/style.css";

const app = createApp(App);

app.use(Equal);
app.use(router);

app.mount("#app");
