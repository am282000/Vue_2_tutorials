<template>
	<div>
		<input
			type="text"
			placeholder="Enter your name"
			v-model="signup.username"
		/>
		<input
			type="password"
			placeholder="Enter your password"
			v-model="signup.password"
		/>

		<p>Choose Background</p>
		<input
			type="checkbox"
			id="technical"
			value="technical"
			v-model="signup.background"
		/>

		<label for="technical">Technical</label>
		<input
			type="checkbox"
			id="nontechnical"
			value="nontechnical"
			v-model="signup.background"
		/>
		<label for="nontechnical">Non Technical</label>

		<p>Select Gender</p>
		<input type="radio" id="male" value="male" v-model="signup.gender" />
		<label for="male">Male</label>
		<input type="radio" id="female" value="female" v-model="signup.gender" />
		<label for="female">Female</label>
		<input type="radio" id="other" value="other" v-model="signup.gender" />
		<label for="other">Others</label>
		<br />
		<button v-on:click="signUpUser">Sign Up</button>
	</div>
</template>
<script>
export default {
	name: 'SignUp',
	data() {
		return {
			signup: {
				username: null,
				password: null,
				background: [],
				gender: null
			}
		};
	},
	methods: {
		signUpUser() {
			console.warn(this.signup);
		}
	}
};
</script>
