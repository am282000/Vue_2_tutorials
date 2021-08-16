<template>
	<div>
		<h2>Home Component</h2>
		<User />
		<Product />
	</div>
</template>
<script>
import User from './User.vue';
import Product from './Product.vue';
export default {
	name: 'Home',
	components: {
		User,
		Product
	}
};
</script>

<style scoped>
div {
	background-color: rgb(141, 248, 248);
	height: 500px;
}
</style>
