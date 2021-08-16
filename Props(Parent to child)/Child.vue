<template>
	<!-- Working Flow of data : input -> data() -> h2 -->
	<div>
		<h2>Child Component</h2>
		<h3>{{ myName }}</h3>
		<h3 v-for="user in arrayProp" :key="user.id">
			{{ user.name }} - {{ user.email }}
		</h3>
	</div>
</template>

<script>
export default {
	name: 'Child',

	props: ['myName', 'arrayProp'] // for a string props
};
</script>
