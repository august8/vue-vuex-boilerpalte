<template>
  <div class="mdl-textfield mdl-js-textfield">
    <input @change="CHANGE_KEYWORD($event.target.value)" class="mdl-textfield__input" type="text" id="sample1">
    <i @click="SEARCH" class="material-icons">search</i>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { CHANGE_KEYWORD, SEARCH } from "../store/mutation-types.js";
export default {
  methods: {
    ...mapActions("Gipfy", [CHANGE_KEYWORD, SEARCH])
  }
};
</script>
