<template>
  <div id="app">
    <vue-typed-js v-if="languageActive" :strings="[$t('span_design'),$t('span_manage'),$t('span_dev')]" :backSpeed="100" :typeSpeed="100" :backDelay="1000"> <h1>{{ $t('message_think')}}<br/> <span class="typing"></span> </h1> </vue-typed-js>
    <button @click="switchLocale()">Switch language</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      languageActive: true,
    }
  },
  methods: {
    switchLocale() {
      this.languageActive = false
      this.$i18n.locale = 'de'
      setTimeout(() => {
        this.languageActive = true
      }, 1)
    }
  }
}
</script>

<style>
</style>
