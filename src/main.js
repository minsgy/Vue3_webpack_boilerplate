import {createApp} from 'vue'
import App from './App'
import router from '~/routes'
import store from '~/store'
import '~/routes/guard'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
