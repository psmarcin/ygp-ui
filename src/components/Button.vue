<template>
  <button v-on:click.stop="add">New Channel</button>
</template>


<script lang="ts">
import Vue from "vue";
import { mutations } from "@/modules/channels/index";
export default Vue.extend({
  computed: {
    value(): number {
      return this.$store.state.var;
    }
  },
});
</script>
