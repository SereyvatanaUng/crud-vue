// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/sass/index.scss";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Import Bootstrap JavaScript before creating the Vue app
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(store).use(router).mount("#app");
