<template>
	<div id="app">
		<h1>Data Binding in Vue JS</h1>
		<DataBind />
	</div>
</template>

<script>
import DataBind from './components/DataBind.vue';

export default {
	name: 'App',
	components: {
		DataBind
	}
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
