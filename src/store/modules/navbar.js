export default {
  state: {
    navbar: [
      { name: "Home", link: "/" },
      { name: "About", link: "/About" },
      { name: "Smykker", link: "/Smykker" },
      { name: "Workshop", link: "/Workshop" },
    ],
    menu: false,
  },
  mutations: {
    toggleActive: (state) => {
      return state.menu = !state.menu
    }
  },
  actions: {
    toggleActive({ commit }) {
      commit('toggleActive')
    }
  },
  getters:{

  }
}