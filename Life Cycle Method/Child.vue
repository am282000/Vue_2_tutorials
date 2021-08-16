<template>
	<!-- Working Flow of data : input -> data() -> h2 -->
	<div>
		<h1>Hi There</h1>
	</div>
</template>

<script>
export default {
	name: 'Child',
	methods: {},
	data() {
		return {};
	},
	beforeMount: function () {
		console.warn('Before Mount');
	},
	mounted: function () {
		console.warn(' Mounted');
	},
	beforeCreate: function () {
		console.warn('Before Create');
	},
	created: function () {
		console.warn('Created');
	}
};
</script>
