<template>
  <div class="trendingContainer">
    <h3 class="uk-card-title">Trending channels</h3>
    <ul class="uk-list uk-list-striped" v-if="list.length">
      <li v-for="item in list" :key="item.channelId" v-on:click.stop="select" :id="item.channelId">
        <img class="thumbnail" :src="item.thumbnailUrl" alt :id="item.channelId">
        {{item.title}}
      </li>
    </ul>
    <div class="uk-placeholder" v-if="!list.length">Loading...</div>
  </div>
</template>


<script lang="ts">
import { actions, mutations } from '@/modules/channels/index';
import Vue from 'vue';

export default Vue.extend({
  computed: {
    list(): void {
      return this.$store.state.channels.trending;
    },
  },
  methods: {
    select(event: any): void {
      this.$store.commit(`channels/${mutations.selectChannel}`, event.target.id);
    },
  },
  created() {
    this.$store.dispatch(`channels/${actions.getTrending}`);
  },
});
</script>

<style scoped>
.trendingContainer {
  transition: all 300ms ease-in-out;
  opacity: 0.3;
}
.trendingContainer:hover {
  opacity: 1;
}
.uk-list li {
  cursor: pointer;
  opacity: 0.5;
}
.uk-list li:hover {
  cursor: pointer;
  opacity: 1;
}
.thumbnail {
  max-height: 30px;
}
</style>
