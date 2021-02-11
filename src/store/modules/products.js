import axios from 'axios'

export default {
	namespaced: true,
	state: {
		products: [],
		test1: "hellot"
	},
	mutations: {
		setProducts(state, products) {
			state.products = products
			console.log(products)
		},
	},
	actions: {
		getProducts({ commit }) {
			axios.get('http://localhost:5000/products').then((res) => {
				commit('setProducts', res.data)
				console.log("hello")
			})
		},
	},
	getters: {},
}
