<template>
	<div id="app">
		<h1>Filters in vue</h1>
		<h6>
			Used to change data or output on screen. Create once use anywhere- No
			import req
		</h6>
		{{ name | Ucase }}
		<MyFilter />
	</div>
</template>

<script>
import MyFilter from './components/MyFilter.vue';
export default {
	name: 'App',
	components: {
		MyFilter
	},
	data() {
		return { name: 'madaan sahaab' };
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
