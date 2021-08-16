<template>
	<div>
        <h2>Login Form with Validation</h2>
        <p v-if="error.length">
            <b>Please correct the following errors</b>  
            <!-- we cant use h3 tag inside a p tag -->
            <ol>
                <li v-for="e in error" v-bind:key="e.id">{{e}}</li>
            </ol>
        </p>
		<form @submit="login">
			<input type="text" placeholder="Enter Name" v-model="name" />
			<input type="password" placeholder="Enter Password" v-model="password" />
			<button type="submit">Login</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data() {
		return {
			error: [],
			name: null,
			password: null
		};
	},
	methods: {
		login(e) {
			this.error = [];
			if (this.name && this.password) {
				console.warn('No Error');
			}
			if (!this.name) {
				this.error.push('Error !! Please enter a Valid Username');
			}
			if (!this.password) {
				this.error.push('Error !! Please enter a Valid Password');
			}
			console.warn('Login Sucessful', this.error);
			e.preventDefault();
		}
	}
};
</script>
