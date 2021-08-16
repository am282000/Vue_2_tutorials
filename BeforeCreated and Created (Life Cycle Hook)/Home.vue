<template>
	<div>
		<h2>{{ name }}</h2>
	</div>
</template>
<script>
export default {
	name: 'Home',
	data() {
		return {
			name: 'Madaan Sahaab'
		};
	},
	beforeCreate() {
		// this.name = 'Devil'; // this wont effect because calling like => beforeCreate -> data->afterCreate
		console.warn('Before Creating', this.name);
	},
	created() {
		this.name = 'Ashish Madan';
		console.warn('Created', this.name);
	}
};
</script>
