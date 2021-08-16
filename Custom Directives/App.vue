<template>
	<div id="app">
		<p v-font-size="'small'">Hi there</p>
		<p v-font-size="'big'">Hi there</p>
		<p v-font-size>Hi there</p>
	</div>
</template>

<script>
export default {
	name: 'App'
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
