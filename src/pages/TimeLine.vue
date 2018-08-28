<template>
  <main class="mdl-layout__content">
    <div class="page-content">
      <search></search>
      <card
        v-for="(gif, index) in gifs"
        :gif="gif"
        :key="index"
        >
      </card>
    </div>
  </main>
</template>

<script>
import Search from "../components/Search.vue";
import Card from "../components/Card.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["gifs"])
  },
  components: {
    Search,
    Card
  }
};
</script>
