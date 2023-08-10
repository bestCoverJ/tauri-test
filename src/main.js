import { createApp } from "vue";
import "@/assets/styles/index.scss";
import router from "./router";
import App from "./App.vue";
import { createPinia } from "pinia";
import "element-plus/theme-chalk/dark/css-vars.css";

createApp(App).use(router).use(createPinia()).mount("#app");
