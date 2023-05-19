import { createApp } from 'vue'
import App from './App.vue'
import { sanitizePlugin } from "v-sanitize-directive";

const app = createApp(App)

app.use(sanitizePlugin);

app.mount('#app')
