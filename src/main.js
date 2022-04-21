import { createApp } from "vue";
import App from "./App.vue";
import registerFormatTime from "./directives";
import plugins from "./plugins/index";
const app = createApp(App);
app.use(plugins.plugin);

registerFormatTime(app);

app.mount("#app");
