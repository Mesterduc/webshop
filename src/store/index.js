import Vue from 'vue'
import Vuex from 'vuex'
import BurgerMenu from './modules/navbar'
import Category from './modules/category'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    BurgerMenu,
    Category
  }
})
