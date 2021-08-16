<template>
	<div>
		<h1>Hello I am a Home</h1>
		<h2>{{ data }}, {{ msg }}</h2>
		<button v-on:click="hello">Hi There 👋</button>
		<button v-on:mouseover="greet('Thanks for clicking me ')">
			M bhi hu yha😭
		</button>
		<!--Event call-->
	</div>
</template>

<script>
export default {
	name: 'Home',
	props: {
		data: String,
		msg: String
	},
	methods: {
		hello() {
			console.log('Hello ji !! Kive oo ');
		},
		greet(a) {
			alert(a);
		}
	}
};
</script>
