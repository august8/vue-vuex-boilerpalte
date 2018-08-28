<template>
  <div id="app">
    <vue-header></vue-header>
    <router-view/>
  </div>
</template>

<script>
import VueHeader from "./components/Header.vue";

export default {
  components: {
    VueHeader
  }
};
</script>

<style>
</style>
