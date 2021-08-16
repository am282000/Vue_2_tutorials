<template>
	<div>
		<h2>TEMPLATE IN VUE</h2>
		<h3 v-once>{{ name }}</h3>
		<!--Act as a constant-->
		<h3>{{ name }}</h3>
		<h3>{{ a + b }}</h3>
		<h3>{{ ok ? 'Yes' : 'No' }}</h3>
		<button v-on:click="updateText">Change Name</button>
		<button v-on:click="yesno">Yes / No</button>
		<p v-html="showHtmlDirectly"></p>
		<button v-bind:disabled="disableMe">Disable Me</button>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			name: 'Madaan Sahaab',
			a: 10,
			b: 11,
			ok: true,
			showHtmlDirectly:
				'<h1>I am Html coming directly from return statement</h1>',
			disableMe: true
		};
	},
	methods: {
		updateText() {
			this.name = 'The Great';
		},
		yesno() {
			this.ok = !this.ok;
		}
	}
};
</script>
