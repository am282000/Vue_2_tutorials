<template>
	<!-- Working Flow of data : input -> data() -> h2 -->
	<div>
		<button v-on:click="updateTitle">Update Parent Title</button>
	</div>
</template>

<script>
export default {
	name: 'Child',
	methods: {
		updateTitle() {
			// console.warn('I am a warning');
			this.$emit('changeTitle', ' I am from Child Prop #Parent Updated'); //function name,new data
		}
	}
};
</script>
