<template>
  <div>
    <div class="logotype"/>
    <div id="app" class="uk-scope uk-container">
      <div class="uk-card uk-card-body">
        <h3 class="uk-card-title">Youtube goes PODCAST!</h3>
        <p class="center">🎞 👉🎙 Put youtube channel get podcast audio feed 🎞 👉🎙</p>
        <Search/>
        <ChannelList/>
        <Options/>
        <Link/>
        <Trending/>
      </div>
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
.center {
  text-align: center;
}
</style>
