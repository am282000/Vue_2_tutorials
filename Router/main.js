import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

import VueRouter from 'vue-router';
import About from './components/About';
import Home from './components/Home';

Vue.use(VueRouter);
const routes = [
	{
		path: '/',
		component: Home
	},
	{
		path: '/about',
		component: About
	}
];

const router = new VueRouter({
	routes
});
new Vue({
	router: router,
	render: (h) => h(App)
}).$mount('#app');
