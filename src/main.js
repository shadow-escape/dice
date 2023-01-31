import { createApp } from 'vue'
import { TippyDirective } from 'tippy.vue'
import App from './App.vue'

import './assets/style/style.scss'

const app = createApp(App)
app.directive('tippy', TippyDirective)
app.mount('#app')
