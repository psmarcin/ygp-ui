<template>
  <div>
    <input
      v-model="searchPhrase"
      class="uk-search-input"
      type="search"
      autofocus
      placeholder="Start typing channel title..."
    >
  </div>
</template>


<script lang="ts">
import debounce from 'lodash/debounce';
import Vue from 'vue';
import { actions } from './../modules/channels/index';
import Button from './Button.vue';

export default Vue.extend({
  components: {
    Button,
  },
  data() {
    return {
      searchPhrase: '',
    };
  },
  created() {
    this.debouncedGettChannels = debounce(this.getChannels, 500);
  },
  watch: {
    searchPhrase(currentValue): void {
      this.debouncedGettChannels(currentValue);
    },
  },
  methods: {
    getChannels(query: string): any {
      this.$store.dispatch(`channels/${actions.get}`, query);
    },
    debouncedGettChannels: debounce((query: string): any => query, 2000),
  },
});
</script>

<style>
.uk-search-input {
  height: 50px;
  margin-bottom: 25px;
  width: 100%;
  font-size: 25px;
  text-align: center;
  padding: 15px 30px;
  border: 2px solid whitesmoke;
  border-radius: 5px;
}
</style>
