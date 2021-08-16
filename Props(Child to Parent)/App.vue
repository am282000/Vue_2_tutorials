<template>
	<div id="app">
		<h1>{{ title }}</h1>
		<Child v-on:changeTitle="updateTitle($event)" />
		<!-- changeTitle call updateTitle taht we are are makin below-->
	</div>
</template>

<script>
import Child from './components/Child.vue';
export default {
	name: 'App',
	components: {
		Child
	},
	data() {
		return {
			title: 'I am from Parent '
		};
	},
	methods: {
		updateTitle(title) {
			this.title = title;
		}
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
