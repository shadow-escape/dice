import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
    faArrowRight,
    faArrowUp,
    faPlus,
    faInfo,
    faRotateLeft,
    faDiceD6,
    faXmark
} from '@fortawesome/free-solid-svg-icons'

const icons = [faArrowRight, faArrowUp, faInfo, faPlus, faRotateLeft, faDiceD6, faXmark]

library.add(...icons)

import './assets/style/style.scss'

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .mount('#app')
