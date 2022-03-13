import { createApp } from "vue";
import "element-plus/dist/index.css";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

createApp(App).use(VueAxios, axios).mount("#app");
