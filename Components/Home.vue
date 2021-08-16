<template>
	<div>
		<h1>Hello I am a Home</h1>
		<h2>{{ data }}, {{ msg }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		data: String,
		msg: String
	}
};
</script>
