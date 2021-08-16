<template>
	<div id="app">
		<img alt="Vue logo" src="./assets/logo.png" />
		<Home data="I am Data prop" msg="I am from msg prop" />
	</div>
</template>

<script>
import Home from './components/Home.vue';

export default {
	name: 'App',
	components: {		
		Home
	}
};
</script>


