import Vue from 'vue';
import App from './App.vue';

Vue.directive('font-size ', {
	// bind(el, binding, vnode) {  //General representation
	bind(el, binding) {
		if (binding.value == 'small') {
			el.style.fontSize = '20px';
		} else if (binding.value == 'big') {
			el.style.fontSize = '100px';
		} else {
			el.style.fontSize = '90px';
		}
	}
});
Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App)
}).$mount('#app');
