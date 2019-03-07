<template>
  <button v-on:click.stop="add">New Channel</button>
</template>


<script lang="ts">
import { mutations } from '@/modules/channels/index';
import Vue from 'vue';
export default Vue.extend({
  computed: {
    value(): number {
      return this.$store.state.var;
    },
  },
});
</script>
