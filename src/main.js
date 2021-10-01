import {createApp} from 'vue'
import App from '~/App'
import Btn from '~/components/Btn'

const app = createApp(App)
// 전역 등록
app.component('Btn', Btn) 
app.mount('#app')

