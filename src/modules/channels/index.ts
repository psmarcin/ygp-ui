import {get, getTrending} from './get';
import { SerializedChannel } from './get.interface';
export const mutations = {
  setList: 'LIST_SET',
  setTrending: 'TRENDING_SET',
  selectChannel: 'CHANNEL_SELECT',
};
export const actions = {
  get: 'GET',
  getTrending: 'GET_TRENDING',
};

export default {
  namespaced: true,
  state: {
    query: '',
    list: [],
    trending: [],
    selected: {},
  },
  mutations: {
    [mutations.setList](state: any, payload: number): void {
      state.list = payload;
    },
    [mutations.setTrending](state: any, payload: number): void {
      state.trending = payload;
    },
    [mutations.selectChannel](state: any, payload: string): void {
      state.selected =
        state.list.find((channel: SerializedChannel) => channel.channelId === payload)
        || state.trending.find((channel: SerializedChannel) => channel.channelId === payload)
        || {};
    },
  },
  actions: {
    async [actions.get](store: any, payload: string): Promise<void> {
      const channels: SerializedChannel[] = await get(payload);
      store.commit(mutations.setList, channels);
    },
    async [actions.getTrending](store: any, payload: string): Promise<void> {
      const trendingChannels: SerializedChannel[] = await getTrending();
      store.commit(mutations.setTrending, trendingChannels);
    },
  },
};
