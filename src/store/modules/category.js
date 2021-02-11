import axios from 'axios'

export default {
	namespaced: true,
	state: {
		category: [],
	},
	mutations: {
		setCategory(state, category) {
			state.category = category
			// console.log(category)
		},
	},
	actions: {
		getCategory({ commit }) {
			axios.get('http://localhost:5000/category').then((res) => {
				commit('setCategory', res.data)
			})
		},
	},
	getters: {},
}
