<template>
  <div>
    <ul class="uk-list uk-list-striped" v-if="list.length">
      <li v-for="item in list" :key="item.channelId" v-on:click.stop="select" :id="item.channelId">
        <img class="thumbnail" :src="item.thumbnailUrl" alt :id="item.channelId">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>


<script lang="ts">
import { mutations } from '@/modules/channels/index';
import Vue from 'vue';

export default Vue.extend({
  computed: {
    list(): void {
      return this.$store.state.channels.list;
    },
  },
  methods: {
    select(event: any): void {
      this.$store.commit(`channels/${mutations.selectChannel}`, event.target.id);
    },
  },
});
</script>

<style scoped>
.uk-list li {
  cursor: pointer;
}
.thumbnail {
  max-height: 30px;
}
</style>
