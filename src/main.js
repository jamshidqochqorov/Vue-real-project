import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
import uiComponents from "./ui-components";
import store from "./store";
uiComponents.map(component =>app.component(component.name,component))
app.use(router)
app.use(store)
app.mount('#app')
