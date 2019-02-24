<template>
  <div id="app" class="uk-scope uk-container">
    <div class="uk-card uk-card-default uk-card-body uk-card-hover">
      <h3 class="uk-card-title">Youtube goes PODCAST!</h3>
      <Search/>
      <ChannelList/>
      <Link/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ChannelList from '@/components/ChannelList.vue';
import Search from '@/components/Search.vue';
import Link from '@/components/Link.vue';

export default Vue.extend({
  components: {
    ChannelList,
    Link,
    Search,
  },
});
</script>
