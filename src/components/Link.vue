<template >
  <span v-if="channelId">
    <input type="url" :value="url" disabled="true" class="url uk-input" co>
  </span>
</template>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: {
    channelId: '',
    url: ''
  },
  computed: {
    channelId(): string {
      console.log('this.$store.state.channels.selected.channelId', this.$store.state.channels.selected.channelId)
      return this.$store.state.channels.selected.channelId
    },
    url(): string {
      return `https://podcasts.psmarcin.me/feed/channel/${this.$store.state.channels.selected.channelId}`
    }
  }
})
</script>

<style lang="css" scoped>
.url {
  width: 100%;
}
</style>
