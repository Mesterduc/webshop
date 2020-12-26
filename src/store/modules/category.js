import axios from 'axios'

export default {
	namespaced: true,
	state: {
		category: [],
	},
	mutations: {
		setCategory(state, category) {
			state.category = category
		},
	},
	actions: {
		getCategory({ commit }) {
			axios.get('http://localhost:5000/category').then((res) => {
				console.log(res.data)
				commit('setCategory', res.data)
			})
		},
	},
	getters: {},
}
