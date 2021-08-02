<script>
import Vue from 'vue';
import NuxtjsBootstrapSidebar from '@/nuxtjs-bootstrap-sidebar.vue';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    NuxtjsBootstrapSidebar
  }
});
</script>

<template>
  <div id="app">
    <nuxtjs-bootstrap-sidebar />
  </div>
</template>
