import Vue from 'vue';
import Vuex from 'vuex';
import createWebSocketPlugin from "./plugin/WebSockPlugin";

Vue.use(Vuex)


const websocketPlugin = createWebSocketPlugin("ws://"+location.hostname+":3000");

export default new Vuex.Store({
  state: {
    name: "",
    blockchain: [],
    connectedPeer: [],
    user: {},
  },
  mutations: {
    setBlockchain(state, blockchain) {
        state.blockchain = blockchain;
    },
    addBlock(state, block) {
        state.blockchain.push(block);
    },
    setUser(state, payload){
      state.user = payload;
    },
    ClearLogin(state){
      state.user = {};
      console.log('로그아웃');
      console.log(state.user);
    }
  },
  actions: {
    RequestBlockchainSync() {
    },
    RequestAddBlock(state, data) {
    },
    ResponseBlockchainSync({commit}, blockchain) {
        commit("setBlockchain", blockchain);
    },
    ResponseAddBlock(){

    }

  },
  getters: {
    getBlockChain: state => state.blockchain
  },
  plugins:[websocketPlugin]
});
