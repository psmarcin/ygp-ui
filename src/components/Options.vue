<template>
  <div v-show="selected">
    <h3 class="uk-card-title">Selected: {{ title }}</h3>
    <button class="uk-button uk-button-default" href v-on:click.stop="toggleOptions">Options</button>

    <div class v-show="optionsEnabled">
      <form>
        <fieldset class="uk-fieldset">
          <div class="uk-margin">
            <label class="uk-form-label" for="form-stacked-text">Search</label>
            <div class="uk-form-controls">
              <input
                class="uk-input"
                id="form-stacked-text"
                type="text"
                v-model="search"
                placeholder="We will get only videos that contains this phrase in title"
              >
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { mutations } from '@/modules/options';
import { debounce } from 'lodash';
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      optionsEnabled: false,
      search: '',
    };
  },
  created() {
    this.debouncedSetSearch = debounce(this.setSearch, 200);
  },
  computed: {
    title(): string {
      return this.$store.state.channels.selected.title;
    },
    selected(): boolean {
      return !!this.$store.state.channels.selected.title;
    },
  },
  methods: {
    toggleOptions(): void {
      this.optionsEnabled = !this.optionsEnabled;
    },
    setSearch(e: any): void {
      this.$store.commit(`options/${mutations.setSearch}`, this.search);
    },
    debouncedSetSearch: debounce((query: string): any => query, 1000),
  },
  watch: {
    search(currentValue: string): void {
      this.debouncedSetSearch(currentValue);
    },
  },
});
</script>

<style>
</style>
