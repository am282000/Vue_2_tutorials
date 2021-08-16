<template>
	<div>
		<h1>Employee List</h1>
		<div>
			<table border="1px">
				<tr>
					<td>S.No</td>
					<td>Name</td>
					<td>Age</td>
					<td>Salary</td>
				</tr>
				<tr v-for="item in list" v-bind:key="item.id">
					<td>{{ item.id }}</td>
					<td>{{ item.employee_name }}</td>
					<td>{{ item.employee_age }}</td>
					<td>{{ item.employee_salary }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios); //bind
export default {
	name: 'EmployeeList',
	data() {
		return {
			list: undefined
		};
	},
	mounted() {
		Vue.axios
			.get('https://dummy.restapiexample.com/api/v1/employees')
			.then((response) => {
				this.list = response.data.data;
				console.warn(response.data.data);
			});
	}
};
</script>
