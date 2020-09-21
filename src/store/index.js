import Vue from 'vue'
import Vuex from 'vuex'
import BurgerMenu from './modules/navbar'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // navbar: [
    //   { name: "Home", link: "/" },
    //   { name: "About", link: "/About" },
    //   { name: "Smykker", link: "/Smykker" },
    //   { name: "Workshop", link: "/Workshop" },
    // ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    BurgerMenu,
  }
})
