import * as Vue from 'vue'
import App from './App'
import World from '~/components/World'
const app = Vue.createApp(App)

app.component('World', World)
app.mount('#app')
