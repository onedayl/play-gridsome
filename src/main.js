import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import BilingualTitle from '~/components/BilingualTitle.vue'
import LabelTitle from '~/components/LabelTitle.vue'
import AmapVue from '@amap/amap-vue'

AmapVue.config.key = '268289dea3654e50913460f0fe14cbf1'
AmapVue.config.plugins = [
  'Amap.Toolbar',
  'Amap.Marker',
]

Vue.use(Buefy)
Vue.use(AmapVue)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('BilingualTitle', BilingualTitle)
  Vue.component('LabelTitle', LabelTitle)
}
