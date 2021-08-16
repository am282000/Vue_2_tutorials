<template>
	<div id="app">
		<h1>Props in Vue</h1>
		<Child myName="Hi ! I am a String Prop" />
		<Child v-bind:myName="varProp" />
		<Child v-bind:arrayProp="arrayProp" />
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
			varProp: 'Hi ! I am variable / Property prop', //sending a variable/property as a prop
			arrayProp: [
				{ id: 1, name: 'Ashish', email: 'ashish@test.com' },
				{ id: 2, name: 'Maddy', email: 'maddy@test.com' },
				{ id: 1, name: 'Don Shaab', email: 'donshaab@test.com' }
			]
		};
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
