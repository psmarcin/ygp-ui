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
import { stringify } from '@/common/querystring';
import { Options as QueryParams } from '@/modules/options/index.interface';
import Vue from 'vue';

const DEFAULT_COPY_MESSAGE: string = 'Copy link';
const COPIED_TIMEOUT: number = 3000;

interface IData {
  copied: boolean;
  copyMessage: string;
}


export default Vue.extend({
  data(): IData {
    return {
      copied: false,
      copyMessage: DEFAULT_COPY_MESSAGE,
    };
  },
  computed: {
    options(): QueryParams {
      return this.$store.state.options;
    },
    channelId(): string {
      return this.$store.state.channels.selected.channelId;
    },
    url(): string {
      const stringifiedOption = stringify(this.options);

      return `${process.env.VUE_APP_API_HOST}feed/channel/${
        this.$store.state.channels.selected.channelId
        }${stringifiedOption}`;
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
  margin-bottom: 50px;
}
</style>
