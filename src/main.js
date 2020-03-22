// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue'
import { Carousel } from 'buefy'
import 'buefy/dist/buefy.css'
import DefaultLayout from '~/layouts/Default.vue'
import BilingualTitle from '~/components/BilingualTitle.vue'

Vue.use(Carousel)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BilingualTitle', BilingualTitle)
}
