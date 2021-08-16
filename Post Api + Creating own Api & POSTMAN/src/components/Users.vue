<template>
	<div>
		<h1>Post Something</h1>
		<form @submit="submitData" method="post">
			<input
				type="text"
				name="title"
				v-model="post.title"
				placeholder="Title"
			/>
			<br />
			<br />
			<input
				type="text"
				name="author"
				v-model="post.author"
				placeholder="Author"
			/>
			<br />
			<br />
			<button type="submit">Post</button>
		</form>
	</div>
</template>
<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

export default {
	name: 'Users',
	data() {
		return {
			post: {
				title: null,
				author: null
			}
		};
	},
	methods: {
		submitData(e) {
			this.axios
				.post('http://localhost:3000/posts', this.post)
				.then((result) => {
					console.warn('result', result);
				});
			// console.warn(this.post);
			e.preventDefault();
		}
	}
};
</script>
