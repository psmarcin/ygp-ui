<template>
  <div>
    <input
      v-model="searchPhrase"
      class="uk-search-input"
      type="search"
      placeholder="Start typing channel title..."
    >
  </div>
</template>


<script lang="ts">
import Vue from "vue";
import debounce from "lodash/debounce";
import Button from "./Button.vue";
import { actions } from "./../modules/channels/index";

export default Vue.extend({
  components: {
    Button
  },
  data() {
    return {
      searchPhrase: ""
    };
  },
  created: function () {
    this.debouncedGettChannels = debounce(this.getChannels, 200);
  },
  watch: {
    searchPhrase(currentValue): void {
      console.log("Value ", currentValue);
      this.debouncedGettChannels(currentValue);
    }
  },
  methods: {
    getChannels: function (query: string): any {
      console.log(query);

      this.$store.dispatch(`channels/${actions.get}`, query);
    },
    debouncedGettChannels: debounce((query: string): any => { }, 1000)
  }
});
</script>

<style>
.uk-search-input {
  height: 50px;
  margin-bottom: 25px;
  width: 100%;
  text-align: center;
}
</style>
