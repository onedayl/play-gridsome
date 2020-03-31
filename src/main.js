import Vue from 'vue'
import '@mdi/font/css/materialdesignicons.css'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import BilingualTitle from '~/components/BilingualTitle.vue'
import LabelTitle from '~/components/LabelTitle.vue'
import AmapVueConfig from '@amap/amap-vue/lib/config'

AmapVueConfig.key = '268289dea3654e50913460f0fe14cbf1'
Vue.use(Buefy)

export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  Vue.component('BilingualTitle', BilingualTitle)
  Vue.component('LabelTitle', LabelTitle)
}
