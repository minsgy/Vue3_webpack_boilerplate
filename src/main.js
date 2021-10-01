import * as Vue from 'vue'
import App from './App'
import fetchPlugin from '~/plugins/fetch'

const app = Vue.createApp(App)
app.use(fetchPlugin, {
 pluginName: '$myName'
})
app.mount('#app')
