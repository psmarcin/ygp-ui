import {get, SerializedChannel} from './get';

export const mutations = {
  setList: 'LIST_SET',
  selectChannel: 'CHANNEL_SELECT',
};
export const actions = {
  get: 'GET',
};

export default {
  namespaced: true,
  state: {
    query: '',
    list: [],
    selected: {},
  },
  mutations: {
    [mutations.setList](state: any, payload: number): void {
      state.list = payload;
    },
    [mutations.selectChannel](state: any, payload: string): void {
      state.selected = state.list.find((channel: SerializedChannel) => channel.channelId === payload) || {};
    },
  },
  actions: {
    async [actions.get](store: any, payload: string): Promise<void> {
      const channels: SerializedChannel[] = await get(payload);
      store.commit(mutations.setList, channels);
    },
  },
};
