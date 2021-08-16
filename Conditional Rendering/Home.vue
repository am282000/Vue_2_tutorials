<template>
	<div>
		<!-- directive -->
		<h2 v-if="show">Conditional Rendering</h2>
		<!-- <h2 v-else>I am the Else Block</h2> -->
		<button v-on:click="display">Show/Hide</button>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		data: String,
		msg: String
	},
	data() {
		return { show: true }; //if show:true 1st condition else other
	},
	methods: {
		display() {
			this.show = !this.show;
		}
	}
};
</script>
