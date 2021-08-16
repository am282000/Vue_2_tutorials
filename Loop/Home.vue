<template>
	<div>
		<h2>Loops</h2>
		<table border="1px">
			<tr>
				<td>Id</td>
				<td>Name</td>
				<td>Email</td>
			</tr>
			<tr v-for="user in users" :key="user.id">
				<td>{{ user.id }}</td>
				<td>{{ user.name }}</td>
				<td>{{ user.email }}</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			users: [
				{ id: 1, name: 'mark', email: 'mark@test.com' },
				{ id: 2, name: 'tony', email: 'tony@test.com' },
				{ id: 3, name: 'neha', email: 'neha@test.com' },
				{ id: 4, name: 'happy', email: 'happy@test.com' }
			]
		};
	}
};
</script>
