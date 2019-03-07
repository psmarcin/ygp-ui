<template >
  <span v-if="channelId">
    <label class="uk-form-label" for="form-stacked-text">URL</label>
    <div class="uk-form-controls">
      <input
        class="uk-input"
        id="form-stacked-text"
        type="url"
        :value="url"
        disabled
        placeholder="Your channel URL"
      >
    </div>
    <button
      class="uk-button"
      v-bind:class="{ 'uk-button-primary': copied }"
      type="button"
      @click="click"
      v-clipboard="() => url"
    >{{copyMessage}}</button>
  </span>
</template>


<script lang="ts">
import Vue from 'vue';

const DEFAULT_COPY_MESSAGE: string = 'Copy link';
const COPIED_TIMEOUT: number = 3000;

export default Vue.extend({
  data() {
    return {
      copied: false,
      copyMessage: DEFAULT_COPY_MESSAGE,
    };
  },
  computed: {
    channelId(): string {
      return this.$store.state.channels.selected.channelId;
    },
    url(): string {
      return `https://podcasts.psmarcin.me/feed/channel/${
        this.$store.state.channels.selected.channelId
        }`;
    },
  },
  methods: {
    click(): void {
      this.copied = true;
      this.copyMessage = 'Link Copied!';

      setTimeout(() => {
        this.copied = false;
        this.copyMessage = DEFAULT_COPY_MESSAGE;
      }, COPIED_TIMEOUT);
    },
  },
});
</script>

<style lang="css" scoped>
.url {
  width: 100%;
}
.uk-button {
  width: 100%;
}
</style>
