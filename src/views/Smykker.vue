<template>
	<div class="jewelry">
		<section class="jewelry_header">
			<div class="jewelry_header-container">
				<h1 class="jewelry_category">Smykker</h1>
				<div class="jewelry_undercategory-container">
					<p class="jewelry_undercategory" v-for="category in Category" :key="category._id">
						{{ category.name }}
					</p>
				</div>
			</div>
		</section>
		<section class="searchCatagory"></section>
		<section class="sort"></section>
		<section class="shop"></section>
		<section class="products">
			<div v-for="products in Products.products" :key="products._id">
				{{ products.name }}
				<p>{{ products.price }}</p>
				<p>{{ products.img[0] }}</p>
				<p>{{ products.desc }}</p>
			</div>

			<br />
			<span>{{ Products.test1 }}</span>
		</section>
	</div>
</template>

<script>
// import axios from "axios";
import store from '../store/index'
import { mapState } from 'vuex'

export default {
	name: 'Smykker',
	data() {
		return {
			categoryName: [],
		}
	},
	computed: {
		...mapState({
			Category: (state) => state.Category.category,
			Products: (state) => state.Products,
		}),
	},
	created() {
		// this.categoryName = this.$route.name
	},
	async created() {
		await this.$store.dispatch('Products/getProducts')
	},
}
</script>

<style></style>
