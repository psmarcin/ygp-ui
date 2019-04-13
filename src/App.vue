<template>
  <div id="app" class="uk-scope uk-container">
    <div class="uk-card uk-card-default uk-card-body uk-card-hover">
      <div class="logotype"/>
      <h3 class="uk-card-title">Youtube goes PODCAST!</h3>
      <p
        uk-tooltip="title: Hello World"
      >Let us generate podcasts feed from your favourite YouTube channels.</p>
      <Trending/>
      <Search/>
      <ChannelList/>
      <Options/>
      <Link/>
    </div>
  </div>
</template>

<script lang="ts">
import ChannelList from '@/components/ChannelList.vue';
import Link from '@/components/Link.vue';
import Options from '@/components/Options.vue';
import Search from '@/components/Search.vue';
import Trending from '@/components/Trending.vue';
import Vue from 'vue';

export default Vue.extend({
  components: {
    ChannelList,
    Link,
    Options,
    Search,
    Trending,
  },
});
</script>

<style>
.logotype {
  width: 100%;
  height: 100px;
  background: url("/img/background.jpeg") #e4701d center center repeat-x;
  background-size: contain;
}
.uk-card-title {
  text-align: center;
}
</style>
