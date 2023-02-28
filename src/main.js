import {createApp} from 'vue'
import App from './App.vue'
import { plugin as VueTippy } from 'vue-tippy'

import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faVk} from '@fortawesome/free-brands-svg-icons'
import {
    faArrowRight,
    faArrowUp,
    faPlus,
    faInfo,
    faRotateLeft,
    faDiceD6,
    faXmark,
    faCircleExclamation,
    faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix
} from '@fortawesome/free-solid-svg-icons'

const icons = [faArrowRight, faArrowUp, faInfo, faPlus, faRotateLeft, faDiceD6, faXmark, faVk, faCircleExclamation, faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix]

library.add(...icons)

import './assets/style/style.scss'
import 'tippy.js/dist/tippy.css'

createApp(App)
    .component('fa-icon', FontAwesomeIcon)
    .component('svg-group', {template: `<g><slot></slot></g>`})
    .use(VueTippy, {
        directive: 'tippy',
        component: 'tippy'
    })
    .mount('#app')
