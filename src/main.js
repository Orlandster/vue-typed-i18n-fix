// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueI18n from 'vue-i18n'
import VueTypedJs from 'vue-typed-js'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(VueTypedJs)

const i18n = new VueI18n({
  locale: 'pt',
  messages: {
    pt: {
      span_design: 'o design',
      span_manage: 'a gestão',
      span_dev: 'o desenvolvimento',
    },
    de: {
      span_design: 'test',
      span_manage: 'test2',
      span_dev: 'test3',
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  i18n
})
