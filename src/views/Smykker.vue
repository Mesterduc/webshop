<template>
	<div class="jewelry">
		<section class="jewelry_header">
			<div class="jewelry_header-container">
				<h1 class="jewelry_category">{{ categoryName }}</h1>
				<div class="jewelry_undercategory-container">
          <p class="jewelry_undercategory">rings</p>
          <p class="jewelry_undercategory">necklaces</p>
          <p class="jewelry_undercategory">necklaces</p>
          <p class="jewelry_undercategory">necklaces</p>
        </div>
			</div>
		</section>
		<section class="searchCatagory"></section>
		<section class="sort"></section>
		<section class="shop"></section>
		<section class="products"></section>
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
			categoryName: '',
		}
	},
	computed: {
		...mapState({
			Category: (state) => state.Category.category,
		})
	},
	created() {
		this.categoryName = this.$route.name
	},
	async mounted() {
		await this.$store.dispatch('Category/getCategory')
	},
}
</script>

<style></style>
