<!-- Why we use Mount => to modify DOM -->

<template>
	<div>
		<h1 id="demo">Hi there! How are you {{ name }}</h1>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Madaan Sahaab'
		};
	},
	mounted() {
		// console.warn('mounted ');
		// console.warn(this.$el);
		console.warn('Mount', document.getElementById('demo'));
	},
	beforeMount() {
		// console.warn('before mount ');
		// console.warn(this.$el);
		console.warn('Before Mount', document.getElementById('demo'));
	}
};
</script>
