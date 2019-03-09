import { Options } from './index.interface';
export const mutations = {
  setSearch: 'SEARCH_SET',
};

const state: Options = {
  search: '',
};

export default {
  namespaced: true,
  state,
  mutations: {
    [mutations.setSearch](currentState: any, payload: number): void {
      currentState.search = payload;
    },
  },
};
