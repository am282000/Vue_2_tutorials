<template>
	<!-- Working Flow of data : input -> data() -> h2 -->
	<div>
		<h3>
			Data Binding - To put Vue and model in a sync so that any change is DOM
			reflects imediately
		</h3>
		<h2 style="white-space: pre-line">{{ message }}</h2>
		<textarea type="text" v-model="message" />
	</div>
</template>

<script>
export default {
	name: 'DataBind',
	data() {
		return {
			message: 'Type a message here'
		};
	}
};
</script>
