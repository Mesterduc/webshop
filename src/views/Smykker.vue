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
			<!-- Du skal bruge webpack for at dynamisk at kunne hente billede path
				da path bilver ændret i compile time og vue virker i run time
			  -->
			<div v-for="products in Products.products" :key="products._id">
				{{ products.name }}
				<p>{{ products.price }}</p>
				<p>{{ products.img[0] }}</p>
				<img :src="products.img[0]" alt="">
				<img :src="test" alt="">
				<!-- <img src="../../public/uploads/adalsfad/test.png"> -->
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
			test: "../../public/uploads/adalsfad/test.png"
		}
	},
	computed: {
		...mapState({
			Category: (state) => state.Category.category,
			Products: (state) => state.Products,
		}),
	},
	methods: {
		getImgPath(pic){
			// return require('../' + pic)
		}
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
