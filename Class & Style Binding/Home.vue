<template>
	<div>
		<h2 class="homestyle">Class and Style Binding</h2>
		<h2 v-bind:style="{ color: 'red' }">Style Binding</h2>
		<!--Inline Css-->
		<h2 v-bind:class="{ display: show }">Class Binding with Object</h2>
		<!-- We can also apply multiple classes her like {display: show ,displayColor: show }-->
		<h2 v-bind:class="[tempClass]">Class Binding with Array</h2>
		<!-- We can also directly do it as v-bind:class="['arrayClass']"-->
		<h2 v-bind:class="[show ? 'ShowMe' : 'DontShow']">
			Class Binding with Array
		</h2>
		<!-- If show true add this class else that class #check from Inspect -->
		<h2 v-bind:style="{ background: colorKey }">Style class by properties</h2>
	</div>
</template>

<script>
export default {
	name: 'Home',
	data() {
		return {
			show: true,
			tempClass: 'arrayClass',
			colorKey: 'pink'
		};
	}
};
</script>

<style scoped>
.homestyle {
	color: rgb(12, 16, 245);
}
.display {
	background-color: yellow;
}
.arrayClass {
	background-color: chocolate;
}
</style>
