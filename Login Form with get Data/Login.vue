<template>
	<div>
		<h2>Login Form</h2>
		<input
			type="text"
			v-model="loginForm.username"
			name="username"
			placeholder="Enter Username"
		/>
		<input
			type="password"
			v-model="loginForm.password"
			name="password"
			placeholder="Enter password"
		/>
		<button v-on:click="loginUser">Login</button>
	</div>
</template>

<script>
export default {
	name: 'Login',
	methods: {
		loginUser() {
			console.log('Login Succesfull !!');
			console.log('Username : ', this.loginForm.username);
			console.log('Password : ', this.loginForm.password);
		}
	},
	data() {
		return {
			loginForm: {
				username: null,
				password: null
			}
		};
	}
};
</script>
