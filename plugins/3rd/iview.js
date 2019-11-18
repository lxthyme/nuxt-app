import Vue from 'vue'
// import ViewUI from 'iview-design'
import { locale, Button } from 'view-design'
import lang from 'view-design/dist/locale/en-US'

// import 'view-design/dist/styles/iview.css'

locale(lang)
Vue.component('Button', Button)

// Vue.use(ViewUI, {
//   locale
// })
